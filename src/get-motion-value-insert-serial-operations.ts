import {
   DeepClient,
   SerialOperation,
 } from '@deep-foundation/deeplinks/imports/client';
 import { LinkName } from './link-name';
 import { PACKAGE_NAME } from './package-name';
 import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { MutationInputValue } from '@deep-foundation/deeplinks/imports/client_types';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks';
 
 /**
   * Gets serial operations to insert Device
   * 
   * @example
  ```ts
  const serialOperations = await getDeviceValueInsertSerialOperations({
    deep
  });
  await deep.serial({
    operations: serialOperations
  })
  ```
   */
 export async function getDeviceValueInsertSerialOperations(
   param: GetDeviceValueUpdateSerialOperationsParam
 ): Promise<Array<SerialOperation>> {
   const { deep, info } = param;

   const deviceLink = await getDeviceLink();
 
   const value = await getValue({
     deviceLink,
     data: info,
   });
 
   const serialOperations = await getSerialOperations({
     deviceLink,
     value,
   });

   return serialOperations;
 
   async function getDeviceLink() {
     let deviceLink: Link<number>;
 
     if ('deviceLinkId' in param) {
       if (!param.deviceLinkId) {
         throw new Error(`deviceLinkId is undefined`);
       }
       const { data } = await deep.select({
         id: param.deviceLinkId,
       });
       deviceLink = data[0];
     } else if ('deviceLink' in param) {
       if (!param.deviceLink) {
         throw new Error(`deviceLink is undefined`);
       }
       deviceLink = param.deviceLink;
     } else {
       throw new Error(`Either deviceLink or deviceLinkId must be passed`);
     }
 
     return deviceLink;
   }
 
   async function getValueInsertSerialOperation({
     deviceLink,
     value,
   }: {
     deviceLink: Link<number>;
     value: MutationInputValue<object>['value'];
   }) {
     return createSerialOperation({
       table: 'objects',
       type: 'insert',
       objects: {
         link_id: deviceLink.id,
         value: value,
       },
     });
   }
 
   async function getValueUpdateSerialOperation({
     deviceLink,
     value,
   }: {
     deviceLink: Link<number>;
     value: MutationInputValue<object>['value'];
   }) {
     return createSerialOperation({
       table: 'objects',
       type: 'update',
       exp: {
         link_id: deviceLink.id,
       },
       value: {
         value: value,
       },
     });
   }
 
   async function getValue({
     deviceLink,
     data,
   }: {
     deviceLink: Link<number>;
     data: Partial<DeviceInfo> | undefined;
   }) {
     return {
       ...(deviceLink.value?.value ?? {}),
       ...(data ?? (await getAllDeviceInfo())),
     } as MutationInputValue<object>['value'];
   }
 
   async function getSerialOperations({
     deviceLink,
     value,
   }: {
     deviceLink: Link<number>;
     value: MutationInputValue<object>['value'];
   }) {
     let serialOperations: Array<SerialOperation> = [];
     if (!deviceLink.value) {
       serialOperations.push(
         await getValueUpdateSerialOperation({
           deviceLink,
           value,
         })
       );
     } else {
       serialOperations.push(
         await getValueInsertSerialOperation({
           deviceLink,
           value,
         })
       );
     }
     return serialOperations;
   }
 }
 
 export type GetDeviceValueUpdateSerialOperationsParam = {
   /**
    * DeepClient
    */
   deep: DeepClient;
   /**
    * Device Info
    * 
    * @remarks
    * If not passed then {@link getAllDeviceInfo} is used to get the device info
    */
   info?: DeviceInfo;
 } & (
   | { 
      /**
       * Device Link Id
       */
      deviceLinkId: number 
   }
   | { 
      /**
       * Device Link
       */
      deviceLink: Link<number> 
   }
 )
 