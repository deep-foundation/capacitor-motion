import {
  DeepClient,
  DeepClientInstance,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import { MotionInfo } from './motion-info.js';
import { Package } from './package.js';
import { MotionDecorator } from './create-motion-decorator.js';
import { packageLog } from './package-log.js';

/**
  * Gets serial operations to insert Motion
  * 
  * @example
 ```ts
 const serialOperations = await makeMotionInsertOperations({
   deep
 });
 await deep.serial({
   operations: serialOperations
 })
 ```
  */
export async function makeMotionInsertOperations<TDeepClient extends DeepClientInstance>(
  this: MotionDecorator<TDeepClient>,
  options: MakeMotionInsertOperationsOptions
){
  const log = packageLog.extend(makeMotionInsertOperations.name);
  log({ Options: options });
  const {
    info,
    containerLinkId,
  } = options;
  log({ info });
  const {containValue} = options;
  const reservedLinkIds = await this.reserve(2);
  log({reservedLinkIds})
  const motionLinkId = options.reservedLinkIds?.motionLinkId ?? reservedLinkIds.pop()!;
  log({motionLinkId})
  const containLinkId = options.reservedLinkIds?.containLinkId ?? reservedLinkIds.pop()!;
  log({containLinkId})
  const operations = [
    createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        id: motionLinkId,
        type_id: this.capacitorMotionPackage.Motion.idLocal(),
      },
    }),
    createSerialOperation({
      type: 'insert',
      table: 'objects',
      objects: {
        link_id: motionLinkId,
        value: info,
      }
    }),
    createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        id: containLinkId,
        type_id: this.idLocal("@deep-foundation/core", "Contain"),
        from_id: containerLinkId || this.linkId,
        to_id: motionLinkId,
        ...(containValue ? { value: containValue } : {})
      }
    })
  ]
  log({operations})

  return {
    operations,
    motionLinkId,
    containLinkId,
  };
}

export interface MakeMotionInsertOperationsOptions {
  /**
   * Reserved link ids that will be used in the serial operations
   */
  reservedLinkIds?: {
    /**
     * Reserved link id for the motion
     */
    motionLinkId?: number;
    /**
     * Reserved link id for the contain
     */
    containLinkId?: number;
  };
  /**
   * Link ids of types that will be used in the serial operations
   */
  typeLinkIds?: {
    /**
     * Link id of the contain type
     */
    containTypeLinkId?: number;
    /**
     * Link id of the motion type
     */
    motionTypeLinkId?: number;
  };
  /**
   * Motion Info
   */
  info: MotionInfo;
  /**
   * Link id of the container
   *
   * @remarks
   * If it is null, contain link will not be created
   * @defaultValue {@link MakeMotionInsertOperationsOptions.deep.linkId} if not provided or undefined
   */
  containerLinkId?: number | undefined | null;
  /**
   * Value of the contain link
   *
   * @remarks
   * If {@link MakeMotionInsertOperationsOptions.containerLinkId} is null, this will be ignored
   */
  containValue?: string | undefined;
}
