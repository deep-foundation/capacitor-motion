import { requestPermissions } from "./request-permissions.js";

export function checkPermissions() {
  // There is no way to check permissions right now. There is only requestPermission() for safari
  return requestPermissions();
}