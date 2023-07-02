import { Motion } from '@capacitor/motion';
import { getMotionValueUpdateSerialOperations } from '../../get-motion-value-update-serial-operationsa';
import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client';
import { useEffect } from 'react';
import { PACKAGE_NAME } from '../../package-name';
import { LinkName } from '../../link-name';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types';
import createDebugMessages from 'debug';
import { getMotionInsertSerialOperations } from '../../get-motion-insert-serial-operations';
import { getSubscriptionHandler } from '../get-subscription-handler';

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
  const debug = createDebugMessages(
    `${PACKAGE_NAME}:useAccelerationSubscription`
  );
  debug({ param });
  const { deep, containerLinkId } = param;

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
   */
  containerLinkId: number;
}
