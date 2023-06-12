[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-motion.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-motion) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-motion) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links based on [`@capacitor/motion`](https://www.npmjs.com/package/@capacitor/motion).

[Documentation](https://deep-foundation.github.io/capacitor-motion/)

## How to use?
### Prerequisitions
1. Install this package in your deep by using npm-packager

### By using DeepClient (DeepCase/programmatic)
1. Insert a link of type Motion 
2.  Change its object value to the object with propertied described in [Motion Object Value](#md:motion-object-value)  
or  
Insert a link of any type with any property name from [Motion Object Value](#md:motion-object-value) from Motion link to the same Motion link and set its value to the value of the corresponding property of the Motion object value
![image](https://github.com/deep-foundation/capacitor-motion/assets/66206278/c249d2e9-c76a-4540-8793-93d42d17afd7)



### By using this library programatically
- [Request permissions](https://deep-foundation.github.io/capacitor-motion/functions/requestMotionPermissions.html)  
- [Save motion information](https://deep-foundation.github.io/capacitor-motion/functions/saveMotionInfo.html)  
- [Subscribe to acceleration changes](https://deep-foundation.github.io/capacitor-motion/functions/subscribeToAccelerationChanges.html)  
- [Subscribe to orientation changes](https://deep-foundation.github.io/capacitor-motion/functions/subscribeToOrientationChanges.html)  

## Motion Object Value

The `Motion` link can have object value that can have following properties:

- **acceleration** (type: Object): The acceleration exerted on the device. This object has three properties: x, y, and z representing the acceleration along the respective axes.
- **acceleration.x** (type: Number): The acceleration along the x-axis, which is usually the horizontal left-right axis when the device is held in a standard orientation.
- **acceleration.y** (type: Number): The acceleration along the y-axis, which is usually the vertical up-down axis when the device is held in a standard orientation.
- **acceleration.z** (type: Number): The acceleration along the z-axis, which points out of the screen when the device is held in a standard orientation.
- **accelerationIncludingGravity** (type: Object): The acceleration exerted on the device including the force of gravity. This object has three properties: x, y, and z representing the acceleration along the respective axes.
- **accelerationIncludingGravity.x** (type: Number): The acceleration along the x-axis, including the force of gravity.
- **accelerationIncludingGravity.y** (type: Number): The acceleration along the y-axis, including the force of gravity.
- **accelerationIncludingGravity.z** (type: Number): The acceleration along the z-axis, including the force of gravity. This value will be close to -9.81 (the acceleration due to gravity) when the device is at rest.
- **rotationRate** (type: Object): The rate of rotation around the device's x, y, and z axes. This object has three properties: alpha, beta, and gamma representing the rotation rate around the respective axes.
- **rotationRate.alpha** (type: Number): The rotation rate around the alpha (z) axis, which points out of the screen when the device is held in a standard orientation. The rotation rate is measured in degrees per second.
- **rotationRate.beta** (type: Number): The rotation rate around the beta (x) axis, which is usually the horizontal left-right axis when the device is held in a standard orientation. The rotation rate is measured in degrees per second.
- **rotationRate.gamma** (type: Number): The rotation rate around the gamma (y) axis, which is usually the vertical up-down axis when the device is held in a standard orientation. The rotation rate is measured in degrees per second. 
- **interval** (type: Number): The interval between successive readings from the motion sensor in milliseconds. 

No one field is required. You can add any of these fields as you want

### Fake Object
```json
{
  "acceleration": {
    "x": 3.2,
    "y": 4.7,
    "z": -9.8
  },
  "accelerationIncludingGravity": {
    "x": 0.3,
    "y": 0.2,
    "z": -9.8
  },
  "rotationRate": {
    "alpha": 30,
    "beta": 60,
    "gamma": 90
  },
  "interval": 1000
}
```

## Update Handling

This package contains a `HandleUpdate` that is used to handle updates of a value of instances of type `Motion`. `HandleUpdate` uses handler from [`@freephoenix888/object-to-links-async-converter`](https://www.npmjs.com/package/@freephoenix888/object-to-links-async-converter) to convert Motion object value to links on every update

## Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.
