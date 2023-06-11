import { Motion } from '@capacitor/motion';
import { saveMotionInfo } from './save-motion-info';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { SubscribeToMotionChangesParam } from './subscribe-to-motion-changes-param';

/**
 * Subscribes to acceleration changes and saves them to Deep
 * 
 * @remarks
 * Acceleration data is saved to Deep by using {@link saveMotionInfo}
 */
export async function subscribeToAccelerationChanges({
  deep,
  deviceLinkId,
}: SubscribeToMotionChangesParam) {
  console.log('subscribeToAccelerationChanges');
  return Motion.addListener('accel', async (accelData) => {
    console.log('accelEvent', accelData);
    await saveMotionInfo({
      deep,
      deviceLinkId,
      info: accelData,
    });
  });
}
