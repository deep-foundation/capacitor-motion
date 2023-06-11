import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client';
import { MOTION_PACKAGE_NAME } from './package-name';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { AccelListenerEvent, Motion, RotationRate } from '@capacitor/motion';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types';
import { MotionInfo } from './motion-info';

  /**
   * Saves {@link SaveMotionInfoParam.info} to the value of {@link SaveMotionInfoParam.deviceLink} or {@link SaveMotionInfoParam.deviceLinkId} depending on which one is passed
   * 
   * @throws if neither {@link deviceLink} nor {@link deviceLinkId} is passed
   * @throws if {@link deviceLink} is passed but it does not exist
   * @throws if {@link deviceLinkId} is passed but it does not exist
   * @throws if both {@link deviceLink} and {@link deviceLinkId} are passed
   * 
   * @example
#### Subscribe to acceleration changes by using this library and save them
```ts
const accelerationHandler = await subscribeToAccelerationChanges({
  deep,
  deviceLinkId,
});
```
#### Subscribe to orientation changes by using this library and save them
```ts
const newOrientationHandler = await subscribeToOrientationChanges({
  deep,
  deviceLinkId,
});
```
#### Subscribe to acceleration changes by using @capacitor/motion library and save them
```ts
const accelerationListener = await Motion.addListener(
  'accel',
  async (accelData) => {
    await saveMotionInfo({
      deep,
      deviceLinkId,
      info: accelData,
    });
  }
);
```
#### Subscribe to orientation changes by using @capacitor/motion library and save them
```ts
const accelerationListener = await Motion.addListener(
  'orientation',
  async (orientationData) => {
    await saveMotionInfo({
      deep,
      deviceLinkId,
      info: orientationData,
    });
  }
);
```
   */
export async function saveMotionInfo(
  params: SaveMotionInfoParam
) {
  const info = await removeRedundantFieldsFromMotionInfo({ info: params.info });

  console.log({ params });
  const { deep } = params;
  const serialOperations: Array<SerialOperation> = [];
  let deviceLink = await getDeviceLink();
  let motionLinkId: number;
  let value: MotionInfo | undefined;
  const motionLink = await getMotionLinkOrUndefined({
    deviceLinkId: deviceLink.id,
  });
  if (motionLink) {
    motionLinkId = motionLink.id;
    value = motionLink.value?.value;
  } else {
    const reservedLinkIds = await deep.reserve(1);
    motionLinkId = reservedLinkIds.pop()!;
    serialOperations.push(
      await getMotionLinkInsertSerialOperation({
        deviceLinkId: deviceLink.id,
        motionLinkId,
      })
    );
  }
  if (value) {
    serialOperations.push(
      await getMotionLinkValueUpdateSerialOperation({ motionLinkId })
    );
  } else {
    serialOperations.push(
      await getMotionLinkValueInsertSerialOperation({ motionLinkId })
    );
  }

  console.log({ serialOperations });
  await deep.serial({
    operations: serialOperations,
  });

  /**
   * Gets link of type {@link Device} 
   * 
   * @throws if neither {@link deviceLink} nor {@link deviceLinkId} is passed
   * @throws if {@link deviceLink} is passed but it does not exist
   * @throws if {@link deviceLinkId} is passed but it does not exist
   */
  async function getDeviceLink() {
    let deviceLink: Link<number>;
    if('deviceLinkId' in params && 'deviceLink' in params) {
      throw new Error(`Both deviceLinkId and deviceLink are passed. Either deviceLink or deviceLinkId must be passed`)
    } else if ('deviceLinkId' in params) {
      const { data } = await deep.select({
        id: params.deviceLinkId,
      });
      deviceLink = data[0];
    } else if ('deviceLink' in params) {
      deviceLink = params.deviceLink;
    } else {
      throw new Error(`Either deviceLink or deviceLinkId must be passed`);
    }
    return deviceLink;
  }

  /**
   * Gets link of type {@link Motion} with id {@link motionLinkId} or undefined if it does not exist
   */
  async function getMotionLinkOrUndefined({
    deviceLinkId,
  }: {
    deviceLinkId: number;
  }): Promise<Link<number> | undefined> {
    const selectData: BoolExpLink = {
      type_id: {
        _id: [MOTION_PACKAGE_NAME, 'Motion'],
      },
      from_id: deviceLinkId,
      to_id: deviceLinkId,
    };
    const {
      data: [motionLink],
    } = await deep.select(selectData);
    // if (!motionLink) {
    //   throw new Error(`Select with data ${selectData} return empty result`)
    // }
    return motionLink;
  }

  /**
   * Gets serial operation that inserts link of type {@link Motion} with id {@link motionLinkId} to {@link deviceLinkId}
   */
  async function getMotionLinkInsertSerialOperation({
    deviceLinkId,
    motionLinkId,
  }: {
    deviceLinkId: number;
    motionLinkId: number;
  }) {
    return createSerialOperation({
      table: 'links',
      type: 'insert',
      objects: {
        id: motionLinkId,
        type_id: await deep.id(MOTION_PACKAGE_NAME, 'Motion'),
        from_id: deviceLinkId,
        to_id: deviceLinkId,
        in: {
          data: {
            type_id: await deep.id('@deep-foundation/core', 'Contain'),
            from_id: deviceLinkId,
            string: {
              data: {
                value: 'Motion',
              },
            },
          },
        },
      },
    });
  }

  /**
   * Gets serial operation that inserts value of a link of type {@link Motion} with id {@link motionLinkId} to {@link info}
   */
  async function getMotionLinkValueInsertSerialOperation({
    motionLinkId,
  }: {
    motionLinkId: number;
  }) {
    return createSerialOperation({
      table: 'objects',
      type: 'insert',
      objects: {
        link_id: motionLinkId,
        value: info,
      },
    });
  }

  /**
   * Gets serial operation that updates value of a link of type {@link Motion} with id {@link motionLinkId} to {@link info}
   */
  async function getMotionLinkValueUpdateSerialOperation({
    motionLinkId,
  }: {
    motionLinkId: number;
  }) {
    return createSerialOperation({
      table: 'objects',
      type: 'update',
      exp: {
        link_id: motionLinkId,
      },
      value: {
        value: { ...info },
      },
    });
  }

  /**
   * Removes redundant fields from an object of type {@link MotionInfo} because they contain extra fields that are not specified in their typescript interface
   */
  async function removeRedundantFieldsFromMotionInfo({ info }: { info: Partial<MotionInfo> }): Promise<Partial<MotionInfo>> {
    // capacitor-motion actually actually pass to us object with extra fields that are not specified in their typescript interface
    return {
      ...('acceleration' in info
        ? {
            acceleration: {
              x: info.acceleration!.x,
              y: info.acceleration!.y,
              z: info.acceleration!.z,
            },
          }
        : {}),
      ...('accelerationIncludingGravity' in info
        ? {
            accelerationIncludingGravity: {
              x: info.accelerationIncludingGravity!.x,
              y: info.accelerationIncludingGravity!.y,
              z: info.accelerationIncludingGravity!.z,
            },
          }
        : {}),
      ...('rotationRate' in info
        ? {
            rotationRate: {
              alpha: info.rotationRate!.alpha,
              beta: info.rotationRate!.beta,
              gamma: info.rotationRate!.gamma,
            },
          }
        : {}),
      ...('interval' in info ? { interval: info.interval } : {}),
    };
  }
}

export type SaveMotionInfoParam = { deep: DeepClient; info: Partial<MotionInfo> } & (
  | { deviceLinkId: number }
  | { deviceLink: Link<number> }
);