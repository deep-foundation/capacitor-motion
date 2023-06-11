import { DeepClient } from "@deep-foundation/deeplinks/imports/client";

export interface SubscribeToMotionChangesParam {
   /**
    * A Deep client instance
    */
   deep: DeepClient;
   /**
    * A Device link ID
    */
   deviceLinkId: number;
 }