import { useEffect, useState } from "react";
import { checkPermissions } from "../../check-permissions.js";
import { PermissionStatus } from "../../permission-status.js";

export function usePermissionsStatus() {
  const [permissionsStatus, setPermissionsStatus] = useState<
    PermissionStatus | undefined
  >(undefined);

  useEffect(() => {
    checkPermissions().then(setPermissionsStatus);
  });

  return permissionsStatus;
}
