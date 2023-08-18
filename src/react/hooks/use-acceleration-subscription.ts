import { Motion } from '@capacitor/motion';
import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { useEffect } from 'react';
import createDebugMessages from 'debug';
import { getSubscriptionHandler } from '../get-subscription-handler.js';
import { Package } from '../../package.js';

/**
 * This hook subscribes to the acceleration event and saves the data to Deep
 *
 * @remarks
 * It is not recommended to use this hook directly. Instead of {@link WithUseAccelerationSubscription}
 * 
 * @example
```ts
useAccelerationSubscription({
  deep,
  containerLinkId
})
```
 */
export function useAccelerationSubscription(
  param: UseAccelerationSubscriptionParam
) {
  const { deep, containerLinkId = deep.linkId! } = param;
  const $package = new Package({ deep });
  const debug = createDebugMessages(
    `${$package.name}:useAccelerationSubscription`
  );
  debug({ param });

  useEffect(() => {
    const accelerationHandlerFunction = getSubscriptionHandler({
      deep,
      containerLinkId,
    });
    const accelerationHandler = Motion.addListener(
      'accel',
      accelerationHandlerFunction
    );
    debug({ accelerationHandler });
    return () => {
      accelerationHandler.remove();
    };
  }, [deep, containerLinkId]);
}

export interface UseAccelerationSubscriptionParam {
  /**
   * A Deep client instance
   */
  deep: DeepClient;
  /**
   * A container link id
   * 
   * @defaultValue deep.linkId
   */
  containerLinkId?: number;
}
