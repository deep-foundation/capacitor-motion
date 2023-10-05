import { MotionDecorator } from "../../create-motion-decorator.js";
import { UseAccelerationSyncOptions, useAccelerationSync } from "../hooks/use-acceleration-sync.js";
import { useMotionSync } from "../hooks/use-motion-sync.js";
import { WithAccelerationSync, WithAccelerationSyncOptions } from "./with-acceleration-sync.js";
import { WithOrientationSync, WithOrientationSyncOptions } from "./with-orientation-sync.js";

/**
 * A component wrapper for {@link WithAccelerationSync} and {@link WithOrientationSync}
 * 
 * @remarks
 * Render this component when {@link WithMotionSyncOptions.deep} and {@link WithMotionSyncOptions.deviceLinkId} are ready
 * 
 * @example
```tsx
function MyComponent(deep, deviceLinkId) {
   return deep.linkId && deviceLinkId ? 
      <WithMotionSync deep={deep} deviceLinkId={deviceLinkId} /> :
      null;
}
```
 */
export function WithMotionSync(options: WithMotionSyncOptions) {
   useMotionSync(options)

   return options.children ?? null
}

export type WithMotionSyncOptions = WithAccelerationSyncOptions & WithOrientationSyncOptions;