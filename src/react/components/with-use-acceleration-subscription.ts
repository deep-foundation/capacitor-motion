import { UseAccelerationSubscriptionParam, useAccelerationSubscription } from "../hooks/use-acceleration-subscription";

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
      <WithUseOrientationSubscription deep={deep} deviceLinkId={deviceLinkId} /> :
      null;
}
```
 */
export function WithUseAccelerationSubscription(param: WithUseAccelerationSubscription) {
   const { deep, deviceLinkId } = param;

   useAccelerationSubscription({
      deep,
      deviceLinkId
   })

   return null;
}

export type WithUseAccelerationSubscription = UseAccelerationSubscriptionParam;