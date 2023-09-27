import { MotionDecorator } from "../../create-motion-decorator.js";
import { UseOrientationSyncOptions, useOrientationSync } from "../hooks/use-orientation-sync.js";

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
      <WithOrientationSync deep={deep} deviceLinkId={deviceLinkId} /> :
      null;
}
```
 */
export function WithOrientationSync(this: MotionDecorator, options: WithOrientationSyncOptions) {
   const {   containerLinkId, children } = options;

   this.useOrientationSync({
      containerLinkId
   })

   return children;
}

export type WithOrientationSyncOptions = UseOrientationSyncOptions & {
   children?: JSX.Element;
};