import { Motion } from '@capacitor/motion';
import { getMotionValueUpdateSerialOperations } from './get-motion-value-update-serial-operations.js';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { SubscribeToMotionChangesParam } from './subscribe-to-motion-changes-param.js';

/**
 * Subscribes to acceleration changes and saves them to Deep
 * 
 * @remarks
 * Motion permissions should be granted before calling this function by using {@link requestMotionPermissions}
 * Acceleration data is saved to Deep by using {@link getMotionValueUpdateSerialOperations}
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
    const serialOperations = await getMotionValueUpdateSerialOperations({
      deep,
      deviceLinkId,
      info: accelData,
    });
    await deep.serial({
      operations: serialOperations,
    })
  });
}
