import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { Package } from "./package.js";
import { updateMotion } from "./update-motion.js";
import { WithMotionSync, makeMotionValueUpdateOperations, useMotionSync, insertMotion, makeMotionInsertOperations, useAccelerationSync, useOrientationSync } from "./main.js";
import { packageLog } from "./package-log.js";
import { getSubscriptionHandler } from "./react/get-subscription-handler.js";

export function createMotionDecorator<TDeepClient extends DeepClientInstance>(deep: TDeepClient): MotionDecorator<TDeepClient> {
  const log = packageLog.extend(`@deep-foundation/capacitor-motion:${createMotionDecorator.name}`);
  const _package = new Package({deep})
  const decorator: MotionDecorator<TDeepClient> = {
    ...deep,
    capacitorMotionPackage: _package,
    "@deep-foundation/capacitor-motion": _package,
    getSubscriptionHandler,
    useAccelerationSync,
    useOrientationSync: useAccelerationSync,
    useMotionSync: useMotionSync,
    WithMotionSync: WithMotionSync,
    insertMotion: insertMotion,
    makeMotionInsertOperations: makeMotionInsertOperations,
    makeMotionValueUpdateOperations: makeMotionValueUpdateOperations,
    updateMotion: updateMotion,
  }

  Object.setPrototypeOf(decorator, Object.getPrototypeOf(deep));

  log({decorator})
  return decorator;
}

export type MotionDecorator<TDeepClient extends DeepClientInstance = DeepClientInstance> = TDeepClient & {
  "@deep-foundation/capacitor-motion": Package,
  capacitorMotionPackage: Package,
  getSubscriptionHandler: typeof getSubscriptionHandler;
  insertMotion: typeof insertMotion;
  makeMotionInsertOperations: typeof makeMotionInsertOperations
  makeMotionValueUpdateOperations: typeof makeMotionValueUpdateOperations 
  updateMotion: typeof updateMotion;
}