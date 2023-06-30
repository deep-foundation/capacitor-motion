import { Motion } from '@capacitor/motion';
import { getMotionValueUpdateSerialOperations } from './get-motion-value-update-serial-operationsa.js';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { SubscribeToMotionChangesParam } from './subscribe-to-motion-changes-param.js';
import { getMotionInsertSerialOperations } from './get-motion-insert-serial-operations.js';

/**
 * Subscribes to orientation changes and saves them
 * 
 * @remarks
 * Motion permissions should be granted before calling this function by using {@link requestMotionPermissions}
 * Orientation data is saved by using {@link getMotionValueUpdateSerialOperations} with {@link GetMotionInsertSerialOperationsParam.containerLinkId} set to {@link SubscribeToMotionChangesParam.deviceLinkId}
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
    const serialOperations = await getMotionInsertSerialOperations({
      deep,
      containerLinkId: deviceLinkId,
      info: {
        rotationRate,
      },
    });
    await deep.serial({
      operations: serialOperations,
    })
  });
}
