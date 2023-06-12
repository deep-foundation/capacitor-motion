import { UseAccelerationSubscriptionParam, useAccelerationSubscription } from "../hooks/use-acceleration-subscription";

export function WithUseAccelerationSubscription(param: WithUseAccelerationSubscription) {
   const { deep, deviceLinkId } = param;

   useAccelerationSubscription({
      deep,
      deviceLinkId
   })

   return null;
}

export type WithUseAccelerationSubscription = UseAccelerationSubscriptionParam;