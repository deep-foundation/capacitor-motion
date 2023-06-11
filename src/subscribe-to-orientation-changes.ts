import { Motion } from '@capacitor/motion';
import { saveMotionInfo } from './save-motion-info';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { SubscribeToMotionChangesParam } from './subscribe-to-motion-changes-param';

/**
 * Subscribes to orientation changes and saves them to Deep
 * 
 * @remarks
 * Orientation data is saved to Deep by using {@link saveMotionInfo}
 */
export async function subscribeToOrientationChanges({
  deep,
  deviceLinkId,
}: SubscribeToMotionChangesParam) {
  return Motion.addListener('orientation', async (rotationRate) => {
    await saveMotionInfo({
      deep,
      deviceLinkId,
      info: {
        rotationRate,
      },
    });
  });
}
