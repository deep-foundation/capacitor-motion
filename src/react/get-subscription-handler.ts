import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { MotionInfo } from '../motion-info.js';
import { BoolExpLink } from '@deep-foundation/deeplinks/imports/client_types';
import createDebugMessages from 'debug';
import { makeMotionInsertOperations } from '../make-motion-insert-operations.js';
import { makeMotionValueUpdateOperations } from '../make-motion-value-update-operations.js';
import { Package } from '../package.js';
import { MotionDecorator } from '../create-motion-decorator.js';

/**
 * Returns a subscription handler for the acceleration/orientation event
 * 
 * @remarks It is not recommended to use this function directly. Instead use {@link WithAccelerationSync} or {@link WithOrientationSync}
 * 
 * @example
 * #### Handle acceleration event
```ts
const accelerationHandlerFunction = getSubscriptionHandler({
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
export function getSubscriptionHandler(options: GetSubscriptionHandlerOptions) {
  const {  containerLinkId } = options;
  const log = createDebugMessages(`${deep.capacitorMotionPackage.name}:getSubscriptionHandler`);
  log({ options });
  const deep = this;

  return subscriptionHandler;


  async function subscriptionHandler(paramInfo: MotionInfo) {
    const subscriptionHandlerLog = log.extend(subscriptionHandler.name)
    const motionSelectData: BoolExpLink = {
      type_id: {
        _id: [deep.capacitorMotionPackage.name, deep.capacitorMotionPackage.Motion.name]
      },
      in: {
        type_id: {
          _id: ['@deep-foundation/core', 'Contain'],
        },
        from_id: containerLinkId,
      },
    };
    subscriptionHandlerLog({ motionSelectData });
    const {
      data: [motionLink],
    } = await deep.select(motionSelectData);
    subscriptionHandlerLog({ motionLink });
    const info = {
      ...paramInfo,
      ...motionLink?.value?.value
    }
    let operations: Array<SerialOperation>;
    if (!motionLink) {
      operations = await deep.makeMotionInsertOperations({
                info,
        containerLinkId
      }).then(result => result.operations);
    } else {
      operations = await deep.makeMotionValueUpdateOperations({
                motionLink,
        info,
      });
    }
    subscriptionHandlerLog({ operations });
    const serialResult = await deep.serial({
      operations: operations,
    });
    subscriptionHandlerLog({ serialResult });
  }
}

export interface GetSubscriptionHandlerOptions {
  /**
   * A Deep client instance
   */
  deep: DeepClient;
  /**
   * A container link id
   */
  containerLinkId: number;
}
