import { UseAccelerationSubscriptionParam, useAccelerationSubscription } from "../hooks/use-acceleration-subscription.js";

/**
 * A component wrapper for {@link useOrientationSubscription}
 * 
 * @remarks
 * Render this component when {@link WithUseOrientationSubscriptionParam.deep} and {@link WithUseOrientationSubscriptionParam.deviceLinkId} are ready
 * 
 * @example
```tsx
function MyComponent(deep, deviceLinkId) {
   return deep.linkId && deviceLinkId ? 
      <WithUseAccelerationSubscription deep={deep} deviceLinkId={deviceLinkId} /> :
      null;
}
```
 */
export function WithAccelerationSubscription(param: WithAccelerationSubscriptionParam) {
   const { deep, containerLinkId } = param;

   useAccelerationSubscription({
      deep,
      containerLinkId
   })

   return null;
}

export type WithAccelerationSubscriptionParam = UseAccelerationSubscriptionParam;