import { DeviceInfo, Device } from "@capacitor/device"
import { useState, useEffect } from "react"

export function WithPlatformChecking(options: WithPlatformCheckingOptions) {
  const { renderIfNotSupported, renderIfSupported, renderIfLoading } = options
  const [platform, setPlatform] = useState<DeviceInfo['platform'] | undefined>(undefined)

  useEffect(() => {
    Device.getInfo().then(deviceInfo => {
      setPlatform(deviceInfo.platform)
    })
  }, [])

  if(platform === undefined) {
    return renderIfLoading()
  } else if (platform === 'web') {
    return renderIfNotSupported()
  } else {
    return renderIfSupported()
  }
}

export interface WithPlatformCheckingOptions {
  renderIfNotSupported: () => JSX.Element;
  renderIfSupported: () => JSX.Element;
  renderIfLoading: () => JSX.Element;
}