import { UseOrientationSubscriptionParam, useOrientationSubscription } from "../hooks/use-orientation-subscription.js";

/**
 * A component wrapper for {@link useOrientationSubscription}
 * 
 * @remarks
 * Render this component when {@link WithOrientationSubscriptionParam.deep} and {@link WithOrientationSubscriptionParam.deviceLinkId} are ready
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
export function WithOrientationSubscription(param: WithOrientationSubscriptionParam) {
   const { deep,  containerLinkId } = param;

   useOrientationSubscription({
      deep,
      containerLinkId
   })

   return null;
}

export type WithOrientationSubscriptionParam = UseOrientationSubscriptionParam;