import { Motion } from "@capacitor/motion";
import { saveMotionInfo } from "../save-motion-info";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client";

export function useOrientationSubscription(param:MotionSubscriptionParam) {
   const { deep, deviceLinkId } = param;
   Motion.addListener('orientation', async (orientationData) => {
      await saveMotionInfo({
        deep,
        deviceLinkId,
        info: {
         rotationRate: orientationData
        },
      });
    });
}

export interface MotionSubscriptionParam {
   deep: DeepClient;
   deviceLinkId: number;
}
