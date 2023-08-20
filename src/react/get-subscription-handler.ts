import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { MotionInfo } from '../motion-info.js';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types';
import createDebugMessages from 'debug';
import { getMotionInsertSerialOperations } from '../get-motion-insert-serial-operations.js';
import { getMotionValueUpdateSerialOperations } from '../get-motion-value-update-serial-operations.js';
import { Package } from '../package.js';

/**
 * Returns a subscription handler for the acceleration/orientation event
 * 
 * @remarks It is not recommended to use this function directly. Instead use {@link WithUseAccelerationSubscription} or {@link WithUseOrientationSubscription}
 * 
 * @example
 * #### Handle acceleration event
```ts
const accelerationHandlerFunction = getSubscriptionHandler({
  deep,
  containerLinkId,
});
const accelerationHandler = Motion.addListener(
  'accel',
  accelerationHandlerFunction
);
return () => {
  accelerationHandler.remove();
};
```
  * #### Handle orientation event
```ts
useEffect(() => {
  const accelerationHandlerFunction = getSubscriptionHandler({
      deep,
      containerLinkId,
  })
  const orientationHandler = Motion.addListener('orientation', (event) => {
      accelerationHandlerFunction({
        rotationRate: event
      })
  });
  return () => {
      orientationHandler.remove();
  }
}, [deep, containerLinkId]) 
```
 */
export function getSubscriptionHandler(param: GetSubscriptionHandlerParam) {
  const { deep, containerLinkId } = param;
  const $package = new Package({ deep });
  const debug = createDebugMessages(`${$package.name}:getSubscriptionHandler`);
  debug({ param });

  return subscriptionHandler;

  async function subscriptionHandler(paramInfo: MotionInfo) {
    const debug = createDebugMessages(
      `${$package.name}:getSubscriptionHandler:subscriptionHandler`
    );
    const motionSelectData: BoolExpLink = {
      type_id: {
        _id: [$package.name, $package.Motion.name]
      },
      in: {
        type_id: {
          _id: ['@deep-foundation/core', 'Contain'],
        },
        from_id: containerLinkId,
      },
    };
    debug({ motionSelectData });
    const {
      data: [motionLink],
    } = await deep.select(motionSelectData);
    debug({ motionLink });
    const info = {
      ...paramInfo,
      ...motionLink?.value?.value
    }
    let serialOperations: Array<SerialOperation>;
    if (!motionLink) {
      serialOperations = await getMotionInsertSerialOperations({
        deep,
        info,
        containerLinkId
      });
    } else {
      serialOperations = await getMotionValueUpdateSerialOperations({
        deep,
        motionLink,
        info,
      });
    }
    debug({ serialOperations });
    const serialResult = await deep.serial({
      operations: serialOperations,
    });
    debug({ serialResult });
  }
}

export interface GetSubscriptionHandlerParam {
  /**
   * A Deep client instance
   */
  deep: DeepClient;
  /**
   * A container link id
   */
  containerLinkId: number;
}
