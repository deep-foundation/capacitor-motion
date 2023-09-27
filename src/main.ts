export {
  WithAccelerationSync,
  type WithAccelerationSyncOptions,
} from "./react/components/with-acceleration-sync.js";
export {
  WithMotionSync,
  type WithMotionSyncOptions,
} from "./react/components/with-motion-sync.js";
export {
  WithOperatingSystemChecking,
  WithOperatingSystemChecking as WithMotionOperatingSystemChecking,
  type WithOperatingSystemCheckingOptions,
  WithOperatingSystemCheckingOptions as WithMotionOperatingSystemCheckingOptions,
} from "./react/components/with-operating-system-checking.js";
export {
  WithOrientationSync,
  type WithOrientationSyncOptions,
} from "./react/components/with-orientation-sync.js";
export {
  WithPermissionsRequesting ,
  WithPermissionsRequestingOptions,
  WithPermissionsRequesting as WithMotionPermissionsRequesting,
  WithPermissionsRequestingOptions as WithMotionPermissionsRequestingOptions,
} from "./react/components/with-permissions-requesting.js";
export {
  WithPermissionsStatus,
  WithPermissionsStatus as WithMotionPermissionsStatus,
  WithPermissionsStatusOptions,
  WithPermissionsStatusOptions as WithMotionPermissionsStatusOptions,
} from './react/components/with-permissions-status.js'

export {
  useMotionSync,
  UseMotionSyncOptions,
} from "./react/hooks/use-motion-sync.js";
export {
  useAccelerationSync,
  UseAccelerationSyncOptions,
} from "./react/hooks/use-acceleration-sync.js";
export {
  useOrientationSync,
  UseOrientationSyncOptions,
} from "./react/hooks/use-orientation-sync.js";
export { usePermissionsRequest, usePermissionsRequest as useMotionPermissionsRequest } from "./react/hooks/use-permissions-request.js";
export {usePermissionsStatus, usePermissionsStatus as useMotionPermissionsStatus} from './react/hooks/use-permissions-status.js'

export {
  makeMotionInsertOperations,
  type MakeMotionInsertOperationsOptions,
} from "./make-motion-insert-operations.js";
export {
  makeMotionValueUpdateOperations,
  type MakeMotionValueUpdateSerialOperationsOptions,
} from "./make-motion-value-update-operations.js";
export { type MotionInfo } from "./motion-info.js";
export { requestPermissions } from "./request-permissions.js";
export { subscribeToAccelerationChanges } from "./subscribe-to-acceleration-changes.js";
export { subscribeToOrientationChanges } from "./subscribe-to-orientation-changes.js";
export { type SubscribeToMotionChangesOptions } from "./subscribe-to-motion-changes-options.js";

export { insertMotion, InsertMotionOptions } from "./insert-motion.js";
export { updateMotion, UpdateMotionOptions } from "./update-motion.js";

export {
  MotionDecorator,
  createMotionDecorator,
} from "./create-motion-decorator.js";

export { Package, PackageOptions } from "./package.js";
