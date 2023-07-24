import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { AccelListenerEvent, Motion, RotationRate } from '@capacitor/motion';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types.js';
import { MotionInfo } from './motion-info.js';
import createDebugMessages from 'debug';
import { Package } from './package.js';

/**
   * Updates value of {@link GetMotionValueUpdateSerialOperationsParam.motionLink} or {@link GetMotionValueUpdateSerialOperationsParam.motionLinkId} to {@link GetMotionValueUpdateSerialOperationsParam.info}
   * 
   * @remarks
   * After update, the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/enums/LinkName.html#UpdateHandler) will create links to represent the value
   * 
   * @throws if neither {@link motionLink} nor {@link motionLinkId} is passed
   * @throws if {@link motionLinkId} is passed but it does not exist
   * @throws if both {@link motionLink} and {@link motionLinkId} are passed
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
  motionLinkId
});

await deep.serial({
  operations: serialOperations
})
```
   */
export async function getMotionValueUpdateSerialOperations(
  param: GetMotionValueUpdateSerialOperationsParam
): Promise<Array<SerialOperation>> {
  const serialOperations: Array<SerialOperation> = [];
  const { deep } = param;
  const $package = new Package({ deep });
  const debug = createDebugMessages(
    `${$package.name}:getMotionValueUpdateSerialOperations`
  );
  debug({ param });

  const info = await removeRedundantFieldsFromMotionInfo({ info: param.info });
  debug({ info });

  let motionLink = await getMotionLink();
  debug({ motionLink });

  if (motionLink.value) {
    serialOperations.push(
      await getMotionLinkValueUpdateSerialOperation({
        motionLinkId: motionLink.id,
        info,
      })
    );
  } else {
    serialOperations.push(
      await getMotionLinkValueInsertSerialOperation({
        motionLinkId: motionLink.id,
        info,
      })
    );
  }

  debug({ serialOperations });
  return serialOperations;

  /**
   * Gets link of type {@link Device}
   *
   * @throws if neither {@link motionLink} nor {@link motionLinkId} is passed
   * @throws if {@link motionLink} is passed but it does not exist
   * @throws if {@link motionLinkId} is passed but it does not exist
   */
  async function getMotionLink() {
    const debug = createDebugMessages(
      `${$package.name}:getMotionValueUpdateSerialOperations:getMotionLink`
    );
    let motionLink: Link<number>;
    if ('motionLinkId' in param && 'motionLink' in param) {
      throw new Error(
        `Both motionLinkId and motionLink are passed. Either motionLink or motionLinkId must be passed`
      );
    } else if ('motionLinkId' in param) {
      const { data } = await deep.select({
        id: param.motionLinkId,
      });
      motionLink = data[0];
    } else if ('motionLink' in param) {
      motionLink = param.motionLink;
    } else {
      throw new Error(`Either motionLink or motionLinkId must be passed`);
    }
    debug({ motionLink });
    return motionLink;
  }

  /**
   * Gets serial operation that inserts link of type {@link Motion} with id {@link motionLinkId} to {@link motionLinkId}
   */
  async function getMotionLinkInsertSerialOperation({
    motionLinkId,
  }: {
    motionLinkId: number;
  }) {
    return createSerialOperation({
      table: 'links',
      type: 'insert',
      objects: {
        id: motionLinkId,
        type_id: await deep.id($package.name, 'Motion'),
        from_id: motionLinkId,
        to_id: motionLinkId,
        in: {
          data: {
            type_id: await deep.id('@deep-foundation/core', 'Contain'),
            from_id: motionLinkId,
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
    info,
  }: {
    motionLinkId: number;
    info: MotionInfo;
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
    info,
  }: {
    motionLinkId: number;
    info: MotionInfo;
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
  async function removeRedundantFieldsFromMotionInfo({
    info,
  }: {
    info: Partial<MotionInfo>;
  }): Promise<Partial<MotionInfo>> {
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

export type GetMotionValueUpdateSerialOperationsParam = {
  deep: DeepClient;
  info: Partial<MotionInfo>;
} & ({ motionLinkId: number } | { motionLink: Link<number> });
