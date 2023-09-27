import { PermissionStatus } from "../../permission-status.js";
import { usePermissionsStatus } from "../hooks/use-permissions-status.js";

export function WithPermissionsStatus(options: WithPermissionsStatusOptions) {
  const permissionsStatus = usePermissionsStatus();

  if ("render" in options) {
    return options.render(permissionsStatus);
  } else {
    if (permissionsStatus === undefined) {
      return options.renderIfLoading();
    } else if (
      permissionsStatus === "granted"
    ) {
      return options.renderIfGranted();
    } else if (
      permissionsStatus === "denied"
    ) {
      return options.renderIfDenied();
    } else if (
      permissionsStatus === "prompt"
    ) {
      return options.renderIfPrompt();
    }
  }
}

export type WithPermissionsStatusOptions =
  | {
      renderIfLoading: () => JSX.Element;
      renderIfGranted: () => JSX.Element;
      renderIfDenied: () => JSX.Element;
      renderIfPrompt: () => JSX.Element;
    }
  | {
      render: (permissionsStatus: PermissionStatus | undefined) => JSX.Element;
    };
