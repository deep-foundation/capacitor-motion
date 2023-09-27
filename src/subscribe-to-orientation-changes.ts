import { Motion } from '@capacitor/motion';
import { makeMotionValueUpdateOperations } from './make-motion-value-update-operations.js';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { SubscribeToMotionChangesOptions } from './subscribe-to-motion-changes-options.js';
import { makeMotionInsertOperations } from './make-motion-insert-operations.js';
import { MotionDecorator } from './create-motion-decorator.js';

/**
 * Subscribes to orientation changes and saves them
 * 
 * @remarks
 * Motion permissions should be granted before calling this function by using {@link requestMotionPermissions}
 * Orientation data is saved by using {@link makeMotionValueUpdateOperations} with {@link GetMotionInsertSerialOperationsOptions.containerLinkId} set to {@link SubscribeToMotionChangesOptions.deviceLinkId}
 * 
 * @example
```ts
#### Subscribe to orientation changes
```ts
const newOrientationHandler = await subscribeToOrientationChanges({
    deviceLinkId,
});
```
```
 */
export async function subscribeToOrientationChanges(this: MotionDecorator,options: SubscribeToMotionChangesOptions) {
  const {
    deviceLinkId,
} = options
  return Motion.addListener('orientation', async (rotationRate) => {
    const {operations} = await this.makeMotionInsertOperations({
            containerLinkId: deviceLinkId,
      info: {
        rotationRate,
      },
    });
    await this.serial({
      operations: operations,
    })
  });
}
