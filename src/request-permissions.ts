import { PermissionStatus } from "./permission-status.js";

/**
 * Requests motion permissions
 */
export async function requestPermissions(): Promise<PermissionStatus> {
  if (DeviceMotionEvent && 'requestPermission' in DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
    return await DeviceMotionEvent.requestPermission();
  } else {
    return 'granted'
  }
}

