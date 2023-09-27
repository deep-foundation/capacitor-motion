import { Motion } from '@capacitor/motion';
import { makeMotionValueUpdateOperations } from './make-motion-value-update-operations.js';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { SubscribeToMotionChangesOptions } from './subscribe-to-motion-changes-options.js';
import { makeMotionInsertOperations } from './make-motion-insert-operations.js';
import { MotionDecorator } from './create-motion-decorator.js';

/**
 * Subscribes to acceleration changes and saves them 
 * 
 * @remarks
 * Motion permissions should be granted before calling this function by using {@link requestMotionPermissions}
 * Acceleration data is saved by using {@link makeMotionValueUpdateOperations} with {@link GetMotionInsertSerialOperationsOptions.containerLinkId} set to {@link SubscribeToMotionChangesOptions.deviceLinkId}
 * 
 * @example
```ts
#### Subscribe to acceleration changes
```ts
const accelerationHandler = await subscribeToAccelerationChanges({
    deviceLinkId,
});
```
```
 */
export async function subscribeToAccelerationChanges(this: MotionDecorator, options: SubscribeToMotionChangesOptions) {
  const {
    deviceLinkId,
} = options;
  console.log('subscribeToAccelerationChanges');
  return Motion.addListener('accel', async (accelData) => {
    console.log('accelEvent', accelData);
    const {operations} = await this.makeMotionInsertOperations({
            containerLinkId: deviceLinkId,
      info: accelData,
    });
    await this.serial({
      operations: operations,
    })
  });
}
