import { useState, useEffect } from "react";
import { requestPermissions,PermissionState } from "../../request-permissions";

export function usePermissionsRequest() {
  const [permissionsState, setPermissionsState] = useState<PermissionState|undefined>(undefined);
  useEffect(() => {
    requestPermissions().then(permissionsStatus => {
      setPermissionsState(permissionsStatus)
    })
  }, [])
  return permissionsState
}