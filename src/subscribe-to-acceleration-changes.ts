import { Motion } from '@capacitor/motion';
import { getMotionValueUpdateSerialOperations } from './get-motion-value-update-serial-operationsa.js';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { SubscribeToMotionChangesParam } from './subscribe-to-motion-changes-param.js';
import { getMotionInsertSerialOperations } from './get-motion-insert-serial-operations.js';

/**
 * Subscribes to acceleration changes and saves them 
 * 
 * @remarks
 * Motion permissions should be granted before calling this function by using {@link requestMotionPermissions}
 * Acceleration data is saved by using {@link getMotionValueUpdateSerialOperations} with {@link GetMotionInsertSerialOperationsParam.containerLinkId} set to {@link SubscribeToMotionChangesParam.deviceLinkId}
 * 
 * @example
```ts
#### Subscribe to acceleration changes
```ts
const accelerationHandler = await subscribeToAccelerationChanges({
  deep,
  deviceLinkId,
});
```
```
 */
export async function subscribeToAccelerationChanges({
  deep,
  deviceLinkId,
}: SubscribeToMotionChangesParam) {
  console.log('subscribeToAccelerationChanges');
  return Motion.addListener('accel', async (accelData) => {
    console.log('accelEvent', accelData);
    const serialOperations = await getMotionInsertSerialOperations({
      deep,
      containerLinkId: deviceLinkId,
      info: accelData,
    });
    await deep.serial({
      operations: serialOperations,
    })
  });
}
