import { Motion } from '@capacitor/motion';
import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { useEffect } from 'react';
import createDebugMessages from 'debug';
import { getSubscriptionHandler } from '../get-subscription-handler.js';
import { Package } from '../../package.js';
import { useAccelerationSync } from './use-acceleration-sync.js';
import { MotionDecorator } from '../../create-motion-decorator.js';
import { packageLog } from '../../package-log.js';

/**
 * This hook subscribes to the acceleration and motion event and saves the data to Deep
 *
 * @remarks
 * It is not recommended to use this hook directly. Instead of {@link WithMotionSync}
 * 
 * @example
```ts
useMotionSync({
    containerLinkId
})
```
 */
export function useMotionSync(
  this: MotionDecorator,
  options: UseMotionSyncOptions
) {
  const {  containerLinkId = this.linkId! } = options;
  const $package = new Package({ deep: this });
  const debug = packageLog.extend(useMotionSync.name);
  debug({ options });

  this.useAccelerationSync({containerLinkId});
  
}

export interface UseMotionSyncOptions {
  /**
   * A Deep client instance
   */
  
  /**
   * A container link id
   * 
   * @defaultValue deep.linkId
   */
  containerLinkId?: number;
}
