import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { PACKAGE_NAME } from './package-name.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { AccelListenerEvent, Motion, RotationRate } from '@capacitor/motion';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types.js';
import { MotionInfo } from './motion-info.js';

  /**
   * Saves {@link SaveMotionInfoParam.info} to the value of a link of type `Motion` which from and to will be {@link SaveMotionInfoParam.deviceLink} or {@link SaveMotionInfoParam.deviceLinkId} depending on which one is passed
   * 
   * @remarks
   * After value of Motion link is updated, a handler from `@freephoenix888/object-to-links-async-converter` will create links to represent the value
   * 
   * @throws if neither {@link deviceLink} nor {@link deviceLinkId} is passed
   * @throws if {@link deviceLink} is passed but it does not exist
   * @throws if {@link deviceLinkId} is passed but it does not exist
   * @throws if both {@link deviceLink} and {@link deviceLinkId} are passed
   * 
   * @example
   * #### Save Motion Info
```ts
let info = {
  acceleration: {
    x: 3.2,
    y: 4.7,
    z: -9.8,
  },
  accelerationIncludingGravity: {
    x: 0.3,
    y: 0.2,
    z: -9.8,
  },
  rotationRate: {
    alpha: 30,
    beta: 60,
    gamma: 90,
  },
  interval: 1000,
};

const serialOperations = await getMotionValueUpdateSerialOperations({
  deep,
  info,
  deviceLinkId
});

await deep.serial({
  operations: serialOperations
})
```
   */
export async function getMotionValueUpdateSerialOperations(
  params: SaveMotionInfoParam
): Promise<Array<SerialOperation>> {
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
  return serialOperations

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
        _id: [PACKAGE_NAME, 'Motion'],
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
        type_id: await deep.id(PACKAGE_NAME, 'Motion'),
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