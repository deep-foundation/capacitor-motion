import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client';
import { LinkName } from './link-name';
import { PACKAGE_NAME } from './package-name';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { MotionInfo } from './motion-info';
import createDebugMessages from 'debug';

/**
  * Gets serial operations to insert Motion
  * 
  * @example
 ```ts
 const serialOperations = await getMotionInsertSerialOperations({
   deep,
   info
 });
 await deep.serial({
   operations: serialOperations
 })
 ```
  */
export async function getMotionInsertSerialOperations(
  param: GetMotionInsertSerialOperationsParam
): Promise<Array<SerialOperation>> {
  const serialOperations = [];
  const debug = createDebugMessages(`${PACKAGE_NAME}:getMotionInsertSerialOperations`);
  debug({param})
  const {
    deep,
    info,
    containValue,
    containerLinkId,
  } = param;
  const reservedLinkIds = await getReservedLinkIds();
  debug({reservedLinkIds})
  const { containLinkId, motionLinkId } = reservedLinkIds;
  const typeLinkIds = await getTypeLinkIds();
  debug({typeLinkIds})
  const { containTypeLinkId, motionTypeLinkId } = typeLinkIds;
  const motionInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'links',
    objects: {
      id: motionLinkId,
      type_id: motionTypeLinkId,
    },
  });
  debug({motionInsertSerialOperation})
  serialOperations.push(motionInsertSerialOperation);
  const valueOfMotionInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'objects',
    objects: {
      link_id: motionLinkId,
      value: info,
    },
  });
  debug({valueOfMotionInsertSerialOperation})
  serialOperations.push(valueOfMotionInsertSerialOperation);
  if (containerLinkId !== null) {
    const containInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        type_id: containTypeLinkId,
        from_id: containerLinkId || deep.linkId,
        to_id: motionLinkId,
      },
    });
  debug({containInsertSerialOperation})
  serialOperations.push(containInsertSerialOperation);
    const valueOfContainInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'strings',
      objects: {
        link_id: containLinkId,
        value: containValue,
      },
    });
  debug({valueOfContainInsertSerialOperation})
  serialOperations.push(valueOfContainInsertSerialOperation);
  }

  debug({serialOperations})
  return serialOperations;

  type GetReservedLinkIdsResult = Exclude<
    GetMotionInsertSerialOperationsParam['reservedLinkIds'],
    undefined
  >;

  async function getReservedLinkIds(): Promise<GetReservedLinkIdsResult> {
    let result: GetReservedLinkIdsResult = {
      containLinkId: 0,
      motionLinkId: 0,
    };
    const linksToReserveCount =
      Object.keys(result).length -
      Object.keys(param.reservedLinkIds || {}).length;
    const reservedLinkIds: number[] =
      linksToReserveCount > 0 ? await deep.reserve(linksToReserveCount) : [];
    result = {
      containLinkId:
        param.reservedLinkIds?.containLinkId ?? reservedLinkIds.pop()!,
      motionLinkId:
        param.reservedLinkIds?.motionLinkId ?? reservedLinkIds.pop()!,
    };
    return result;
  }

  type GetTypeLinkIdsResult = Required<
    Exclude<GetMotionInsertSerialOperationsParam['typeLinkIds'], undefined>
  >;

  async function getTypeLinkIds(): Promise<GetTypeLinkIdsResult> {
    const result: GetTypeLinkIdsResult = {
      containTypeLinkId:
        param.typeLinkIds?.containTypeLinkId ||
        (await deep.id('@deep-foundation/core', 'Contain')),
      motionTypeLinkId:
        param.typeLinkIds?.motionTypeLinkId ||
        (await deep.id(PACKAGE_NAME, LinkName[LinkName.Motion])),
    };
    return result;
  }
}

export interface GetMotionInsertSerialOperationsParam {
  /**
   * Reserved link ids that will be used in the serial operations
   */
  reservedLinkIds?: {
    /**
     * Reserved link id for the motion
     */
    motionLinkId: number;
    /**
     * Reserved link id for the contain
     */
    containLinkId: number;
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
   * Deep Client
   */
  deep: DeepClient;
  /**
   * Motion Info
   */
  info: MotionInfo;
  /**
   * Link id of the container
   *
   * @remarks
   * If it is null, contain link will not be created
   * 
   * @defaultValue {@link GetMotionInsertSerialOperationsParam.deep.linkId} if it is undefined or not provided
   */
  containerLinkId?: number | undefined | null;
  /**
   * Value of the contain link
   *
   * @remarks
   * If {@link GetMotionInsertSerialOperationsParam.containerLinkId} is null, this will be ignored
   */
  containValue?: string | undefined;
}
