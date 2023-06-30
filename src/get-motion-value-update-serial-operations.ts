import {
   DeepClient,
   SerialOperation,
 } from '@deep-foundation/deeplinks/imports/client';
 import { LinkName } from './link-name';
 import { PACKAGE_NAME } from './package-name';
 import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { MutationInputValue } from '@deep-foundation/deeplinks/imports/client_types';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks';
import { DeviceInfo, getAllDeviceInfo } from '@deep-foundation/capacitor-device';
import { MotionInfo } from './motion-info';
 
 /**
   * Gets serial operations to update Motion value
   * 
   * @example
  ```ts
  const serialOperations = await getMotionValueUpdateSerialOperations({
    deep,
    info
  });
  await deep.serial({
    operations: serialOperations
  })
  ```
   */
 export async function getMotionValueUpdateSerialOperations(
   param: GetMotionValueUpdateSerialOperationsParam
 ): Promise<Array<SerialOperation>> {
   const { deep, info } = param;

   const motionLink = await getMotionLink();
 
   const value = await getValue({
    motionLink,
     data: info,
   });
 
   const serialOperations = await getSerialOperations({
     motionLink,
     value,
   });

   return serialOperations;
 
   async function getMotionLink() {
     let motionLink: Link<number>;
 
     if ('motionLinkId' in param) {
       if (!param.motionLinkId) {
         throw new Error(`motionLinkId is undefined`);
       }
       const { data } = await deep.select({
         id: param.motionLinkId,
       });
       motionLink = data[0];
     } else if ('motionLink' in param) {
       if (!param.motionLink) {
         throw new Error(`motionLink is undefined`);
       }
       motionLink = param.motionLink;
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
 
   async function getValue({
    motionLink,
     data,
   }: {
     motionLink: Link<number>;
     data: GetMotionValueUpdateSerialOperationsParam['info'];
   }): Promise<MutationInputValue<object>['value']> {
     return {
       ...(motionLink.value?.value ?? {}),
       ...(data),
     };
   }
 
   async function getSerialOperations({
     motionLink,
     value,
   }: {
     motionLink: Link<number>;
     value: MutationInputValue<object>['value'];
   }) {
     let serialOperations: Array<SerialOperation> = [];
     if (!motionLink.value) {
       serialOperations.push(
         await getValueUpdateSerialOperation({
           motionLink,
           value,
         })
       );
     } else {
       serialOperations.push(
         await getValueInsertSerialOperation({
           motionLink,
           value,
         })
       );
     }
     return serialOperations;
   }
 }
 
 export type GetMotionValueUpdateSerialOperationsParam = {
   /**
    * DeepClient
    */
   deep: DeepClient;
   /**
    * Motion Info
    */
   info: MotionInfo;
 } & (
   | { 
      /**
       * Device Link Id
       */
      motionLinkId: number 
   }
   | { 
      /**
       * Device Link
       */
      motionLink: Link<number> 
   }
 )
 