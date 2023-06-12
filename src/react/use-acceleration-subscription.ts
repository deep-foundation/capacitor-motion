import { Motion } from "@capacitor/motion";
import { saveMotionInfo } from "../save-motion-info";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client";

export function useAccelerationSubscription(param:MotionSubscriptionParam) {
   const { deep, deviceLinkId } = param;
   Motion.addListener('accel', async (accelData) => {
      await saveMotionInfo({
        deep,
        deviceLinkId,
        info: accelData,
      });
    });
}

export interface MotionSubscriptionParam {
   deep: DeepClient;
   deviceLinkId: number;
}
