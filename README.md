[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-motion.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-motion)
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-motion)
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links based on [`@capacitor/motion`](https://www.npmjs.com/package/@capacitor/motion) and typescript library for comfortable using of this deep package using typescript

# Table Of Contents
<!-- TABLE_OF_CONTENTS_START -->
- [Table Of Contents](#table-of-contents)
- [Prerequisitions](#prerequisitions)
- [Usage](#usage)
- [Motion Object Value](#motion-object-value)
- [Update Handling](#update-handling)
- [Library](#library)
  * [Library Usage](#library-usage)
- [Contribution](#contribution)
<!-- TABLE_OF_CONTENTS_END -->

# Prerequisitions

- Install this package in your deep by using npm-packager
- Give permissions to this package

# Usage

1. Insert a link of type [`Motion`]
2. Change its object value to the object with properties described in [Motion Object Value](#motion-object-value) and this update will be handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`Motion`] object value as links
   or  
   Insert a link of any type with any property name from [Motion Object Value](#motion-object-value) from [`Motion`] link to the same [`Motion`] link and set its value to the value of the corresponding property of the [`Motion`] object value. For example insert [`Acceleration`] from [`Motion`] to [`Motion`] and [`AccelerationX`] from [`Acceleration`] to [`Acceleration`]

# Motion Object Value

The [`Motion`] link can have object value.  
No one field is required. You can add any fields as you want. Only the fields that are supported by this package will be represented as links  
- [**Supported fields can be found in the `Motion` interface**](https://deep-foundation.github.io/capacitor-motion/types/MotionInfo.html)  
- [**Example of Motion Object Value**](https://deep-foundation.github.io/capacitor-motion/types/MotionInfo.html#md:motion-info-example)

# Update Handling

[`Motion`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`Motion`] object value as links

# Library
## Library Usage
See [Documentation] for examples and API

# Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.


[`Motion`]: https://deep-foundation.github.io/capacitor-motion/classes/Package.html#Motion
[`Acceleration`]: https://deep-foundation.github.io/capacitor-motion/classes/Package.html#Acceleration
[`AccelerationX`]: https://deep-foundation.github.io/capacitor-motion/classes/Package.html#AccelerationX
[Documentation]: https://deep-foundation.github.io/capacitor-motion/