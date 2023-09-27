import { usePermissionsRequest } from "../hooks/use-permissions-request.js";

/**
 * A component that requires permissions and renders different content based on the permissions state
 */
export function WithPermissionsRequesting(options: WithPermissionsRequestingOptions) {
  const permissionsState = usePermissionsRequest();
  if(permissionsState === undefined) {
    return options.renderIfLoading();
  } else if(permissionsState === "granted") {
    return options.renderIfGranted();
  } else if(permissionsState === "denied") {
    return options.renderIfDenied();
  } else if(permissionsState === "prompt") {
    return options.renderIfPrompt();
  }
}

export interface WithPermissionsRequestingOptions {
  renderIfLoading: () => JSX.Element;
  renderIfGranted: () => JSX.Element;
  renderIfDenied: () => JSX.Element;
  renderIfPrompt: () => JSX.Element;
}