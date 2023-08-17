import { UseAccelerationSubscriptionParam, useAccelerationSubscription } from "../hooks/use-acceleration-subscription";
import { WithAccelerationSubscription, WithAccelerationSubscriptionParam } from "./with-use-acceleration-subscription";
import { WithOrientationSubscription, WithOrientationSubscriptionParam } from "./with-use-orientation-subscription";

/**
 * A component wrapper for {@link WithAccelerationSubscription} and {@link WithOrientationSubscription}
 * 
 * @remarks
 * Render this component when {@link WithMotionSubscriptionParam.deep} and {@link WithMotionSubscriptionParam.deviceLinkId} are ready
 * 
 * @example
```tsx
function MyComponent(deep, deviceLinkId) {
   return deep.linkId && deviceLinkId ? 
      <WithMotionSubscription deep={deep} deviceLinkId={deviceLinkId} /> :
      null;
}
```
 */
export function WithMotionSubscription(param: WithMotionSubscriptionParam) {
   return (
    <>
      <WithAccelerationSubscription {...param} />
      <WithOrientationSubscription {...param} />
    </>
   );
}

export type WithMotionSubscriptionParam = WithAccelerationSubscriptionParam & WithOrientationSubscriptionParam;