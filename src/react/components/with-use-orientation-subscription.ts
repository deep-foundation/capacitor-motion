import { UseOrientationSubscriptionParam, useOrientationSubscription } from "../hooks/use-orientation-subscription";

export function WithUseOrientationSubscription(param: WithUseOrientationSubscription) {
   const { deep, deviceLinkId } = param;

   useOrientationSubscription({
      deep,
      deviceLinkId
   })

   return null;
}

export type WithUseOrientationSubscription = UseOrientationSubscriptionParam;