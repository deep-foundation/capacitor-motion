import { UseOrientationSubscriptionParam, useOrientationSubscription } from "../hooks/use-orientation-subscription";

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
export function WithUseOrientationSubscription(param: WithUseOrientationSubscriptionParam) {
   const { deep, deviceLinkId } = param;

   useOrientationSubscription({
      deep,
      deviceLinkId
   })

   return null;
}

export type WithUseOrientationSubscriptionParam = UseOrientationSubscriptionParam;