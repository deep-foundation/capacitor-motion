/**
 * Requests motion permissions
 */
export async function requestPermissions(): Promise<PermissionState> {
  if (DeviceMotionEvent && 'requestPermission' in DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
    return await DeviceMotionEvent.requestPermission();
  } else {
    return 'granted'
  }
}

export type PermissionState = 'granted' | 'denied' | 'prompt'
