import { Motion } from "@capacitor/motion";
import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js";
import { useEffect } from "react";
import { getSubscriptionHandler } from "../get-subscription-handler.js";
import createDebugMessages from 'debug';
import { Package } from "../../package.js";
import { MotionDecorator } from "../../create-motion-decorator.js";

/**
 * This hook subscribes to the orientation event and saves the data to Deep
 * 
 * @remarks
 * It is not recommended to use this hook directly. Instead of {@link WithOrientationSync}
 * 
 * @exaple
```ts
useOrientationSync({
      containerLinkId
})
```
 */
export function useOrientationSync(this: MotionDecorator, options:UseOrientationSyncOptions) {
   const {  containerLinkId = this.linkId!} = options;
   const debug = createDebugMessages(`${this.capacitorMotionPackage.name}:useOrientationSync`)
   debug({options})

    useEffect(() => {
      const accelerationHandlerFunction = this.getSubscriptionHandler({
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
   }, [this, containerLinkId]) 
}

export interface UseOrientationSyncOptions {
   /**
    * A Deep client instance
    */
   
   /**
    * A container link id
    * 
    * @defaultValue deep.linkId
    */
   containerLinkId?: number;
}
