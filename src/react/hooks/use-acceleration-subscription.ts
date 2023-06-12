import { Motion } from "@capacitor/motion";
import { saveMotionInfo } from "../../save-motion-info";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { useEffect } from "react";

/**
 * This hook subscribes to the acceleration event and saves the data to Deep
 * 
 * @remarks
 * It is not recommended to use this hook directly. Instead of {@link WithUseAccelerationSubscription}
 */
export function useAccelerationSubscription(param:UseAccelerationSubscriptionParam) {
   const { deep, deviceLinkId } = param;
   
   useEffect(() => {
      const accelerationHandler = Motion.addListener('accel', async (accelData) => {
         await saveMotionInfo({
           deep,
           deviceLinkId,
           info: accelData,
         });
       });

      return () => {
         accelerationHandler.remove();
      }
   }, [deep, deviceLinkId]) 
}

export interface UseAccelerationSubscriptionParam {
   /**
    * A Deep client instance
    */
   deep: DeepClient;
   /**
    * A device link id
    */
   deviceLinkId: number;
}
