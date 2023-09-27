import { MotionDecorator } from "../../create-motion-decorator.js";
import { UseAccelerationSyncOptions, useAccelerationSync } from "../hooks/use-acceleration-sync.js";

/**
 * A component wrapper for {@link useOrientationSync}
 * 
 * @remarks
 * Render this component when {@link WithOrientationSyncOptions.deep} and {@link WithOrientationSyncOptions.deviceLinkId} are ready
 * 
 * @example
```tsx
function MyComponent(deep, deviceLinkId) {
   return deep.linkId && deviceLinkId ? 
      <WithAccelerationSync deep={deep} deviceLinkId={deviceLinkId} /> :
      null;
}
```
 */
export function WithAccelerationSync(options: WithAccelerationSyncOptions) {
   const { children } = options;

   useAccelerationSync(options)

   return children;
}

export type WithAccelerationSyncOptions = UseAccelerationSyncOptions & {
   children?: JSX.Element
};