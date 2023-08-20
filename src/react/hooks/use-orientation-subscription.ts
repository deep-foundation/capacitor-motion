import { Motion } from "@capacitor/motion";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js";
import { useEffect } from "react";
import { getSubscriptionHandler } from "../get-subscription-handler.js";
import createDebugMessages from 'debug';
import { Package } from "../../package.js";

/**
 * This hook subscribes to the orientation event and saves the data to Deep
 * 
 * @remarks
 * It is not recommended to use this hook directly. Instead of {@link WithUseOrientationSubscription}
 * 
 * @exaple
```ts
useOrientationSubscription({
   deep,
   containerLinkId
})
```
 */
export function useOrientationSubscription(param:UseOrientationSubscriptionParam) {
   const { deep, containerLinkId = deep.linkId!} = param;
   const $package = new Package({deep})
   const debug = createDebugMessages(`${$package.name}:useOrientationSubscription`)
   debug({param})

    useEffect(() => {
      const accelerationHandlerFunction = getSubscriptionHandler({
         deep,
         containerLinkId,
      })
      const orientationHandler = Motion.addListener('orientation', (event) => {
         accelerationHandlerFunction({
            rotationRate: event
         })
      });
      return () => {
         orientationHandler.remove();
      }
   }, [deep, containerLinkId]) 
}

export interface UseOrientationSubscriptionParam {
   /**
    * A Deep client instance
    */
   deep: DeepClient;
   /**
    * A container link id
    * 
    * @defaultValue deep.linkId
    */
   containerLinkId?: number;
}
