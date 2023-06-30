import { Motion } from '@capacitor/motion';
import { getMotionValueUpdateSerialOperations } from './get-motion-value-update-serial-operations.js';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { SubscribeToMotionChangesParam } from './subscribe-to-motion-changes-param.js';

/**
 * Subscribes to orientation changes and saves them to Deep
 * 
 * @remarks
 * Motion permissions should be granted before calling this function by using {@link requestMotionPermissions}
 * Orientation data is saved to Deep by using {@link getMotionValueUpdateSerialOperations}
 * 
 * @example
```ts
#### Subscribe to orientation changes
```ts
const newOrientationHandler = await subscribeToOrientationChanges({
  deep,
  deviceLinkId,
});
```
```
 */
export async function subscribeToOrientationChanges({
  deep,
  deviceLinkId,
}: SubscribeToMotionChangesParam) {
  return Motion.addListener('orientation', async (rotationRate) => {
    const serialOperations = await getMotionValueUpdateSerialOperations({
      deep,
      deviceLinkId,
      info: {
        rotationRate,
      },
    });
    await deep.serial({
      operations: serialOperations,
    })
  });
}
