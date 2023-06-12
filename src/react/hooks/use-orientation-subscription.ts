import { Motion } from "@capacitor/motion";
import { saveMotionInfo } from "../../save-motion-info";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { useEffect } from "react";

/**
 * This hook subscribes to the orientation event and saves the data to Deep
 * 
 * @remarks
 * It is not recommended to use this hook directly. Instead of {@link WithUseOrientationSubscription}
 */
export function useOrientationSubscription(param:UseOrientationSubscriptionParam) {
   const { deep, deviceLinkId } = param;

    useEffect(() => {
      const orientationHandler = Motion.addListener('orientation', async (orientationData) => {
         await saveMotionInfo({
           deep,
           deviceLinkId,
           info: {
            rotationRate: orientationData
           },
         });
       });

      return () => {
         orientationHandler.remove();
      }
   }, [deep, deviceLinkId]) 
}

export interface UseOrientationSubscriptionParam {
   /**
    * A Deep client instance
    */
   deep: DeepClient;
   /**
    * A device link id
    */
   deviceLinkId: number;
}
