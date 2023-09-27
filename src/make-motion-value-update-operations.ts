import {
  DeepClient,
  DeepClientInstance,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import { MotionInfo } from './motion-info.js';
import { MutationInputValue } from '@deep-foundation/deeplinks/imports/client_types.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';
import { MotionDecorator } from './create-motion-decorator.js';
import deepEqual from 'deep-equal'
import { packageLog } from './package-log.js';

/**
  * Gets serial operations to insert Motion
  * 
  * @example
 ```ts
 const serialOperations = await getMotionValueInsertSerialOperations({
   deep
 });
 await deep.serial({
   operations: serialOperations
 })
 ```
  */
export async function makeMotionValueUpdateOperations<TDeepClient extends DeepClientInstance>(
  this: MotionDecorator<TDeepClient>,
  options: MakeMotionValueUpdateSerialOperationsOptions
): Promise<Array<SerialOperation>> {
 const log = packageLog.extend(`@deep-foundation/capacitor-motion:${makeMotionValueUpdateOperations.name}`)
 log({options})
  const { info } = options;

  const motionLink = await getMotionLink.call(this);
  log({motionLink})

  if(deepEqual(motionLink.value?.value, info)) {
    log(`The same value is already set, returning []`)
    return []
  }

  const serialOperations = await makeSerialOperations({
    motionLink,
    info: info,
  });
   log({serialOperations})

  return serialOperations;

  async function getMotionLink(
    this: MotionDecorator<TDeepClient>
  ) {
    let motionLink: Link<number>;

    if ('motionLinkId' in options) {
      if (!options.motionLinkId) {
        throw new Error(`motionLinkId is undefined`);
      }

      const { data } = await this.select({
        id: options.motionLinkId,
      });
      motionLink = data[0];
    } else if ('motionLink' in options) {
      if (!options.motionLink) {
        throw new Error(`motionLink is undefined`);
      }
      motionLink = options.motionLink;
    } else {
      throw new Error(`Either motionLink or motionLinkId must be passed`);
    }

    return motionLink;
  }

  async function getValueInsertSerialOperation({
    motionLink,
    value,
  }: {
    motionLink: Link<number>;
    value: MutationInputValue<object>['value'];
  }) {
    return createSerialOperation({
      table: 'objects',
      type: 'insert',
      objects: {
        link_id: motionLink.id,
        value: value,
      },
    });
  }

  async function getValueUpdateSerialOperation({
    motionLink,
    value,
  }: {
    motionLink: Link<number>;
    value: MutationInputValue<object>['value'];
  }) {
    return createSerialOperation({
      table: 'objects',
      type: 'update',
      exp: {
        link_id: motionLink.id,
      },
      value: {
        value: value,
      },
    });
  }

  async function makeSerialOperations({
    motionLink,
    info: info,
  }: {
    motionLink: Link<number>;
    info: MutationInputValue<object>['value'];
  }) {
    let serialOperations: Array<SerialOperation> = [];
    if (!motionLink.value) {
      serialOperations.push(
        await getValueUpdateSerialOperation({
          motionLink,
          value: info,
        })
      );
    } else {
      serialOperations.push(
        await getValueInsertSerialOperation({
          motionLink,
          value: info,
        })
      );
    }
    return serialOperations;
  }
}

export type MakeMotionValueUpdateSerialOperationsOptions = {
  /**
   * Motion Info
   */
  info: MotionInfo;
} & (
  | { 
     /**
      * Motion Link Id
      */
     motionLinkId: number 
  }
  | { 
     /**
      * Motion Link
      */
     motionLink: Link<number> 
  }
)
