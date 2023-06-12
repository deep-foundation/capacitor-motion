import { Motion } from "@capacitor/motion";
import { saveMotionInfo } from "../../save-motion-info";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client";

export function useAccelerationSubscription(param:UseAccelerationSubscriptionParam) {
   const { deep, deviceLinkId } = param;
   Motion.addListener('accel', async (accelData) => {
      await saveMotionInfo({
        deep,
        deviceLinkId,
        info: accelData,
      });
    });
}

export interface UseAccelerationSubscriptionParam {
   deep: DeepClient;
   deviceLinkId: number;
}
