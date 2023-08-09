
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const motionRotationRateGammaTypeLinkId = await package["MotionRotationRateGamma"].id();
const motionTypeLinkId = await package["Motion"].id();
const configFor@freephoenix888/object-to-links-async-converterTypeLinkId = await package["ConfigFor@freephoenix888/object-to-links-async-converter"].id();
const handleMotionUpdateTypeLinkId = await package["HandleMotionUpdate"].id();
const motionAccelerationTypeLinkId = await package["MotionAcceleration"].id();
const motionAccelerationZTypeLinkId = await package["MotionAccelerationZ"].id();
const typeOfValueOfMotionAccelerationZTypeLinkId = await package["TypeOfValueOfMotionAccelerationZ"].id();
const motionAccelerationXTypeLinkId = await package["MotionAccelerationX"].id();
const typeOfValueOfMotionAccelerationXTypeLinkId = await package["TypeOfValueOfMotionAccelerationX"].id();
const typeOfValueOfMotionAccelerationTypeLinkId = await package["TypeOfValueOfMotionAcceleration"].id();
const handleMotionAccelerationUpdateTypeLinkId = await package["HandleMotionAccelerationUpdate"].id();
const motionIntervalTypeLinkId = await package["MotionInterval"].id();
const typeOfValueOfIntervalTypeLinkId = await package["TypeOfValueOfInterval"].id();
const typeOfValueOfMotionTypeLinkId = await package["TypeOfValueOfMotion"].id();
const motionRotationRateTypeLinkId = await package["MotionRotationRate"].id();
const motionRotationRateAlphaTypeLinkId = await package["MotionRotationRateAlpha"].id();
const typeOfValueOfMotionRotationRateAlphaTypeLinkId = await package["TypeOfValueOfMotionRotationRateAlpha"].id();
const handleMotionRotationRateUpdateTypeLinkId = await package["HandleMotionRotationRateUpdate"].id();
const motionRotationRateBetaTypeLinkId = await package["MotionRotationRateBeta"].id();
const typeOfValueOfMotionRotationRateBetaTypeLinkId = await package["TypeOfValueOfMotionRotationRateBeta"].id();
const typeOfValueOfMotionRotationRateTypeLinkId = await package["TypeOfValueOfMotionRotationRate"].id();
const typeOfValueOfMotionAccelerationYTypeLinkId = await package["TypeOfValueOfMotionAccelerationY"].id();
const motionAccelerationIncludingGravityTypeLinkId = await package["MotionAccelerationIncludingGravity"].id();
const motionAccelerationIncludingGravityZTypeLinkId = await package["MotionAccelerationIncludingGravityZ"].id();
const typeOfValueOfMotionAccelerationIncludingGravityZTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityZ"].id();
const handleMotionAccelerationIncludingGravityUpdateTypeLinkId = await package["HandleMotionAccelerationIncludingGravityUpdate"].id();
const motionAccelerationIncludingGravityYTypeLinkId = await package["MotionAccelerationIncludingGravityY"].id();
const typeOfValueOfMotionAccelerationIncludingGravityYTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityY"].id();
const motionAccelerationIncludingGravityXTypeLinkId = await package["MotionAccelerationIncludingGravityX"].id();
const typeOfValueOfMotionAccelerationIncludingGravityXTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityX"].id();
const typeOfValueOfMotionAccelerationIncludingGravityTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravity"].id();
const motionAccelerationYTypeLinkId = await package["MotionAccelerationY"].id();
const typeOfValueOfMotionRotationRateGammaTypeLinkId = await package["TypeOfValueOfMotionRotationRateGamma"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const motionRotationRateGammaTypeLinkId = package["MotionRotationRateGamma"].idLocal();
const motionTypeLinkId = package["Motion"].idLocal();
const configFor@freephoenix888/object-to-links-async-converterTypeLinkId = package["ConfigFor@freephoenix888/object-to-links-async-converter"].idLocal();
const handleMotionUpdateTypeLinkId = package["HandleMotionUpdate"].idLocal();
const motionAccelerationTypeLinkId = package["MotionAcceleration"].idLocal();
const motionAccelerationZTypeLinkId = package["MotionAccelerationZ"].idLocal();
const typeOfValueOfMotionAccelerationZTypeLinkId = package["TypeOfValueOfMotionAccelerationZ"].idLocal();
const motionAccelerationXTypeLinkId = package["MotionAccelerationX"].idLocal();
const typeOfValueOfMotionAccelerationXTypeLinkId = package["TypeOfValueOfMotionAccelerationX"].idLocal();
const typeOfValueOfMotionAccelerationTypeLinkId = package["TypeOfValueOfMotionAcceleration"].idLocal();
const handleMotionAccelerationUpdateTypeLinkId = package["HandleMotionAccelerationUpdate"].idLocal();
const motionIntervalTypeLinkId = package["MotionInterval"].idLocal();
const typeOfValueOfIntervalTypeLinkId = package["TypeOfValueOfInterval"].idLocal();
const typeOfValueOfMotionTypeLinkId = package["TypeOfValueOfMotion"].idLocal();
const motionRotationRateTypeLinkId = package["MotionRotationRate"].idLocal();
const motionRotationRateAlphaTypeLinkId = package["MotionRotationRateAlpha"].idLocal();
const typeOfValueOfMotionRotationRateAlphaTypeLinkId = package["TypeOfValueOfMotionRotationRateAlpha"].idLocal();
const handleMotionRotationRateUpdateTypeLinkId = package["HandleMotionRotationRateUpdate"].idLocal();
const motionRotationRateBetaTypeLinkId = package["MotionRotationRateBeta"].idLocal();
const typeOfValueOfMotionRotationRateBetaTypeLinkId = package["TypeOfValueOfMotionRotationRateBeta"].idLocal();
const typeOfValueOfMotionRotationRateTypeLinkId = package["TypeOfValueOfMotionRotationRate"].idLocal();
const typeOfValueOfMotionAccelerationYTypeLinkId = package["TypeOfValueOfMotionAccelerationY"].idLocal();
const motionAccelerationIncludingGravityTypeLinkId = package["MotionAccelerationIncludingGravity"].idLocal();
const motionAccelerationIncludingGravityZTypeLinkId = package["MotionAccelerationIncludingGravityZ"].idLocal();
const typeOfValueOfMotionAccelerationIncludingGravityZTypeLinkId = package["TypeOfValueOfMotionAccelerationIncludingGravityZ"].idLocal();
const handleMotionAccelerationIncludingGravityUpdateTypeLinkId = package["HandleMotionAccelerationIncludingGravityUpdate"].idLocal();
const motionAccelerationIncludingGravityYTypeLinkId = package["MotionAccelerationIncludingGravityY"].idLocal();
const typeOfValueOfMotionAccelerationIncludingGravityYTypeLinkId = package["TypeOfValueOfMotionAccelerationIncludingGravityY"].idLocal();
const motionAccelerationIncludingGravityXTypeLinkId = package["MotionAccelerationIncludingGravityX"].idLocal();
const typeOfValueOfMotionAccelerationIncludingGravityXTypeLinkId = package["TypeOfValueOfMotionAccelerationIncludingGravityX"].idLocal();
const typeOfValueOfMotionAccelerationIncludingGravityTypeLinkId = package["TypeOfValueOfMotionAccelerationIncludingGravity"].idLocal();
const motionAccelerationYTypeLinkId = package["MotionAccelerationY"].idLocal();
const typeOfValueOfMotionRotationRateGammaTypeLinkId = package["TypeOfValueOfMotionRotationRateGamma"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const motionRotationRateGamma = package["MotionRotationRateGamma"].name;
const motion = package["Motion"].name;
const configFor@freephoenix888/object-to-links-async-converter = package["ConfigFor@freephoenix888/object-to-links-async-converter"].name;
const handleMotionUpdate = package["HandleMotionUpdate"].name;
const motionAcceleration = package["MotionAcceleration"].name;
const motionAccelerationZ = package["MotionAccelerationZ"].name;
const typeOfValueOfMotionAccelerationZ = package["TypeOfValueOfMotionAccelerationZ"].name;
const motionAccelerationX = package["MotionAccelerationX"].name;
const typeOfValueOfMotionAccelerationX = package["TypeOfValueOfMotionAccelerationX"].name;
const typeOfValueOfMotionAcceleration = package["TypeOfValueOfMotionAcceleration"].name;
const handleMotionAccelerationUpdate = package["HandleMotionAccelerationUpdate"].name;
const motionInterval = package["MotionInterval"].name;
const typeOfValueOfInterval = package["TypeOfValueOfInterval"].name;
const typeOfValueOfMotion = package["TypeOfValueOfMotion"].name;
const motionRotationRate = package["MotionRotationRate"].name;
const motionRotationRateAlpha = package["MotionRotationRateAlpha"].name;
const typeOfValueOfMotionRotationRateAlpha = package["TypeOfValueOfMotionRotationRateAlpha"].name;
const handleMotionRotationRateUpdate = package["HandleMotionRotationRateUpdate"].name;
const motionRotationRateBeta = package["MotionRotationRateBeta"].name;
const typeOfValueOfMotionRotationRateBeta = package["TypeOfValueOfMotionRotationRateBeta"].name;
const typeOfValueOfMotionRotationRate = package["TypeOfValueOfMotionRotationRate"].name;
const typeOfValueOfMotionAccelerationY = package["TypeOfValueOfMotionAccelerationY"].name;
const motionAccelerationIncludingGravity = package["MotionAccelerationIncludingGravity"].name;
const motionAccelerationIncludingGravityZ = package["MotionAccelerationIncludingGravityZ"].name;
const typeOfValueOfMotionAccelerationIncludingGravityZ = package["TypeOfValueOfMotionAccelerationIncludingGravityZ"].name;
const handleMotionAccelerationIncludingGravityUpdate = package["HandleMotionAccelerationIncludingGravityUpdate"].name;
const motionAccelerationIncludingGravityY = package["MotionAccelerationIncludingGravityY"].name;
const typeOfValueOfMotionAccelerationIncludingGravityY = package["TypeOfValueOfMotionAccelerationIncludingGravityY"].name;
const motionAccelerationIncludingGravityX = package["MotionAccelerationIncludingGravityX"].name;
const typeOfValueOfMotionAccelerationIncludingGravityX = package["TypeOfValueOfMotionAccelerationIncludingGravityX"].name;
const typeOfValueOfMotionAccelerationIncludingGravity = package["TypeOfValueOfMotionAccelerationIncludingGravity"].name;
const motionAccelerationY = package["MotionAccelerationY"].name;
const typeOfValueOfMotionRotationRateGamma = package["TypeOfValueOfMotionRotationRateGamma"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/capacitor-motion',
    });
  }


      /**
      @example
      #### Use id method to get the id of the MotionRotationRateGamma link
      ```ts
      const package = new Package({deep});
      const motionRotationRateGammaTypeLinkId = await package["MotionRotationRateGamma"].id();
      ```
      #### Use localId method to get the local id of the MotionRotationRateGamma link
      ```ts
      const package = new Package({deep});
      const motionRotationRateGammaTypeLinkId = await package["MotionRotationRateGamma"].localId();
      ```
      #### Use name field to get the name of the MotionRotationRateGamma link
      ```ts
      const package = new Package({deep});
      const motionRotationRateGamma = await package["MotionRotationRateGamma"].name;
      ```
      */
      public "MotionRotationRateGamma" = this.createEntity("MotionRotationRateGamma");
      /**
      @example
      #### Use id method to get the id of the Motion link
      ```ts
      const package = new Package({deep});
      const motionTypeLinkId = await package["Motion"].id();
      ```
      #### Use localId method to get the local id of the Motion link
      ```ts
      const package = new Package({deep});
      const motionTypeLinkId = await package["Motion"].localId();
      ```
      #### Use name field to get the name of the Motion link
      ```ts
      const package = new Package({deep});
      const motion = await package["Motion"].name;
      ```
      */
      public "Motion" = this.createEntity("Motion");
      /**
      @example
      #### Use id method to get the id of the ConfigFor@freephoenix888/object-to-links-async-converter link
      ```ts
      const package = new Package({deep});
      const configFor@freephoenix888/object-to-links-async-converterTypeLinkId = await package["ConfigFor@freephoenix888/object-to-links-async-converter"].id();
      ```
      #### Use localId method to get the local id of the ConfigFor@freephoenix888/object-to-links-async-converter link
      ```ts
      const package = new Package({deep});
      const configFor@freephoenix888/object-to-links-async-converterTypeLinkId = await package["ConfigFor@freephoenix888/object-to-links-async-converter"].localId();
      ```
      #### Use name field to get the name of the ConfigFor@freephoenix888/object-to-links-async-converter link
      ```ts
      const package = new Package({deep});
      const configFor@freephoenix888/object-to-links-async-converter = await package["ConfigFor@freephoenix888/object-to-links-async-converter"].name;
      ```
      */
      public "ConfigFor@freephoenix888/object-to-links-async-converter" = this.createEntity("ConfigFor@freephoenix888/object-to-links-async-converter");
      /**
      @example
      #### Use id method to get the id of the HandleMotionUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionUpdateTypeLinkId = await package["HandleMotionUpdate"].id();
      ```
      #### Use localId method to get the local id of the HandleMotionUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionUpdateTypeLinkId = await package["HandleMotionUpdate"].localId();
      ```
      #### Use name field to get the name of the HandleMotionUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionUpdate = await package["HandleMotionUpdate"].name;
      ```
      */
      public "HandleMotionUpdate" = this.createEntity("HandleMotionUpdate");
      /**
      @example
      #### Use id method to get the id of the MotionAcceleration link
      ```ts
      const package = new Package({deep});
      const motionAccelerationTypeLinkId = await package["MotionAcceleration"].id();
      ```
      #### Use localId method to get the local id of the MotionAcceleration link
      ```ts
      const package = new Package({deep});
      const motionAccelerationTypeLinkId = await package["MotionAcceleration"].localId();
      ```
      #### Use name field to get the name of the MotionAcceleration link
      ```ts
      const package = new Package({deep});
      const motionAcceleration = await package["MotionAcceleration"].name;
      ```
      */
      public "MotionAcceleration" = this.createEntity("MotionAcceleration");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationZ link
      ```ts
      const package = new Package({deep});
      const motionAccelerationZTypeLinkId = await package["MotionAccelerationZ"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationZ link
      ```ts
      const package = new Package({deep});
      const motionAccelerationZTypeLinkId = await package["MotionAccelerationZ"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationZ link
      ```ts
      const package = new Package({deep});
      const motionAccelerationZ = await package["MotionAccelerationZ"].name;
      ```
      */
      public "MotionAccelerationZ" = this.createEntity("MotionAccelerationZ");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationZ link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationZTypeLinkId = await package["TypeOfValueOfMotionAccelerationZ"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationZ link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationZTypeLinkId = await package["TypeOfValueOfMotionAccelerationZ"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationZ link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationZ = await package["TypeOfValueOfMotionAccelerationZ"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationZ" = this.createEntity("TypeOfValueOfMotionAccelerationZ");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationX link
      ```ts
      const package = new Package({deep});
      const motionAccelerationXTypeLinkId = await package["MotionAccelerationX"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationX link
      ```ts
      const package = new Package({deep});
      const motionAccelerationXTypeLinkId = await package["MotionAccelerationX"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationX link
      ```ts
      const package = new Package({deep});
      const motionAccelerationX = await package["MotionAccelerationX"].name;
      ```
      */
      public "MotionAccelerationX" = this.createEntity("MotionAccelerationX");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationX link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationXTypeLinkId = await package["TypeOfValueOfMotionAccelerationX"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationX link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationXTypeLinkId = await package["TypeOfValueOfMotionAccelerationX"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationX link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationX = await package["TypeOfValueOfMotionAccelerationX"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationX" = this.createEntity("TypeOfValueOfMotionAccelerationX");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAcceleration link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationTypeLinkId = await package["TypeOfValueOfMotionAcceleration"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAcceleration link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationTypeLinkId = await package["TypeOfValueOfMotionAcceleration"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAcceleration link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAcceleration = await package["TypeOfValueOfMotionAcceleration"].name;
      ```
      */
      public "TypeOfValueOfMotionAcceleration" = this.createEntity("TypeOfValueOfMotionAcceleration");
      /**
      @example
      #### Use id method to get the id of the HandleMotionAccelerationUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionAccelerationUpdateTypeLinkId = await package["HandleMotionAccelerationUpdate"].id();
      ```
      #### Use localId method to get the local id of the HandleMotionAccelerationUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionAccelerationUpdateTypeLinkId = await package["HandleMotionAccelerationUpdate"].localId();
      ```
      #### Use name field to get the name of the HandleMotionAccelerationUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionAccelerationUpdate = await package["HandleMotionAccelerationUpdate"].name;
      ```
      */
      public "HandleMotionAccelerationUpdate" = this.createEntity("HandleMotionAccelerationUpdate");
      /**
      @example
      #### Use id method to get the id of the MotionInterval link
      ```ts
      const package = new Package({deep});
      const motionIntervalTypeLinkId = await package["MotionInterval"].id();
      ```
      #### Use localId method to get the local id of the MotionInterval link
      ```ts
      const package = new Package({deep});
      const motionIntervalTypeLinkId = await package["MotionInterval"].localId();
      ```
      #### Use name field to get the name of the MotionInterval link
      ```ts
      const package = new Package({deep});
      const motionInterval = await package["MotionInterval"].name;
      ```
      */
      public "MotionInterval" = this.createEntity("MotionInterval");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfInterval link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfIntervalTypeLinkId = await package["TypeOfValueOfInterval"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfInterval link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfIntervalTypeLinkId = await package["TypeOfValueOfInterval"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfInterval link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfInterval = await package["TypeOfValueOfInterval"].name;
      ```
      */
      public "TypeOfValueOfInterval" = this.createEntity("TypeOfValueOfInterval");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotion link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionTypeLinkId = await package["TypeOfValueOfMotion"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotion link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionTypeLinkId = await package["TypeOfValueOfMotion"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotion link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotion = await package["TypeOfValueOfMotion"].name;
      ```
      */
      public "TypeOfValueOfMotion" = this.createEntity("TypeOfValueOfMotion");
      /**
      @example
      #### Use id method to get the id of the MotionRotationRate link
      ```ts
      const package = new Package({deep});
      const motionRotationRateTypeLinkId = await package["MotionRotationRate"].id();
      ```
      #### Use localId method to get the local id of the MotionRotationRate link
      ```ts
      const package = new Package({deep});
      const motionRotationRateTypeLinkId = await package["MotionRotationRate"].localId();
      ```
      #### Use name field to get the name of the MotionRotationRate link
      ```ts
      const package = new Package({deep});
      const motionRotationRate = await package["MotionRotationRate"].name;
      ```
      */
      public "MotionRotationRate" = this.createEntity("MotionRotationRate");
      /**
      @example
      #### Use id method to get the id of the MotionRotationRateAlpha link
      ```ts
      const package = new Package({deep});
      const motionRotationRateAlphaTypeLinkId = await package["MotionRotationRateAlpha"].id();
      ```
      #### Use localId method to get the local id of the MotionRotationRateAlpha link
      ```ts
      const package = new Package({deep});
      const motionRotationRateAlphaTypeLinkId = await package["MotionRotationRateAlpha"].localId();
      ```
      #### Use name field to get the name of the MotionRotationRateAlpha link
      ```ts
      const package = new Package({deep});
      const motionRotationRateAlpha = await package["MotionRotationRateAlpha"].name;
      ```
      */
      public "MotionRotationRateAlpha" = this.createEntity("MotionRotationRateAlpha");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionRotationRateAlpha link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateAlphaTypeLinkId = await package["TypeOfValueOfMotionRotationRateAlpha"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionRotationRateAlpha link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateAlphaTypeLinkId = await package["TypeOfValueOfMotionRotationRateAlpha"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionRotationRateAlpha link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateAlpha = await package["TypeOfValueOfMotionRotationRateAlpha"].name;
      ```
      */
      public "TypeOfValueOfMotionRotationRateAlpha" = this.createEntity("TypeOfValueOfMotionRotationRateAlpha");
      /**
      @example
      #### Use id method to get the id of the HandleMotionRotationRateUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionRotationRateUpdateTypeLinkId = await package["HandleMotionRotationRateUpdate"].id();
      ```
      #### Use localId method to get the local id of the HandleMotionRotationRateUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionRotationRateUpdateTypeLinkId = await package["HandleMotionRotationRateUpdate"].localId();
      ```
      #### Use name field to get the name of the HandleMotionRotationRateUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionRotationRateUpdate = await package["HandleMotionRotationRateUpdate"].name;
      ```
      */
      public "HandleMotionRotationRateUpdate" = this.createEntity("HandleMotionRotationRateUpdate");
      /**
      @example
      #### Use id method to get the id of the MotionRotationRateBeta link
      ```ts
      const package = new Package({deep});
      const motionRotationRateBetaTypeLinkId = await package["MotionRotationRateBeta"].id();
      ```
      #### Use localId method to get the local id of the MotionRotationRateBeta link
      ```ts
      const package = new Package({deep});
      const motionRotationRateBetaTypeLinkId = await package["MotionRotationRateBeta"].localId();
      ```
      #### Use name field to get the name of the MotionRotationRateBeta link
      ```ts
      const package = new Package({deep});
      const motionRotationRateBeta = await package["MotionRotationRateBeta"].name;
      ```
      */
      public "MotionRotationRateBeta" = this.createEntity("MotionRotationRateBeta");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionRotationRateBeta link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateBetaTypeLinkId = await package["TypeOfValueOfMotionRotationRateBeta"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionRotationRateBeta link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateBetaTypeLinkId = await package["TypeOfValueOfMotionRotationRateBeta"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionRotationRateBeta link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateBeta = await package["TypeOfValueOfMotionRotationRateBeta"].name;
      ```
      */
      public "TypeOfValueOfMotionRotationRateBeta" = this.createEntity("TypeOfValueOfMotionRotationRateBeta");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionRotationRate link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateTypeLinkId = await package["TypeOfValueOfMotionRotationRate"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionRotationRate link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateTypeLinkId = await package["TypeOfValueOfMotionRotationRate"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionRotationRate link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRate = await package["TypeOfValueOfMotionRotationRate"].name;
      ```
      */
      public "TypeOfValueOfMotionRotationRate" = this.createEntity("TypeOfValueOfMotionRotationRate");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationY link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationYTypeLinkId = await package["TypeOfValueOfMotionAccelerationY"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationY link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationYTypeLinkId = await package["TypeOfValueOfMotionAccelerationY"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationY link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationY = await package["TypeOfValueOfMotionAccelerationY"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationY" = this.createEntity("TypeOfValueOfMotionAccelerationY");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationIncludingGravity link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityTypeLinkId = await package["MotionAccelerationIncludingGravity"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationIncludingGravity link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityTypeLinkId = await package["MotionAccelerationIncludingGravity"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationIncludingGravity link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravity = await package["MotionAccelerationIncludingGravity"].name;
      ```
      */
      public "MotionAccelerationIncludingGravity" = this.createEntity("MotionAccelerationIncludingGravity");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationIncludingGravityZ link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityZTypeLinkId = await package["MotionAccelerationIncludingGravityZ"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationIncludingGravityZ link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityZTypeLinkId = await package["MotionAccelerationIncludingGravityZ"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationIncludingGravityZ link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityZ = await package["MotionAccelerationIncludingGravityZ"].name;
      ```
      */
      public "MotionAccelerationIncludingGravityZ" = this.createEntity("MotionAccelerationIncludingGravityZ");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationIncludingGravityZ link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityZTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityZ"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationIncludingGravityZ link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityZTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityZ"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationIncludingGravityZ link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityZ = await package["TypeOfValueOfMotionAccelerationIncludingGravityZ"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationIncludingGravityZ" = this.createEntity("TypeOfValueOfMotionAccelerationIncludingGravityZ");
      /**
      @example
      #### Use id method to get the id of the HandleMotionAccelerationIncludingGravityUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionAccelerationIncludingGravityUpdateTypeLinkId = await package["HandleMotionAccelerationIncludingGravityUpdate"].id();
      ```
      #### Use localId method to get the local id of the HandleMotionAccelerationIncludingGravityUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionAccelerationIncludingGravityUpdateTypeLinkId = await package["HandleMotionAccelerationIncludingGravityUpdate"].localId();
      ```
      #### Use name field to get the name of the HandleMotionAccelerationIncludingGravityUpdate link
      ```ts
      const package = new Package({deep});
      const handleMotionAccelerationIncludingGravityUpdate = await package["HandleMotionAccelerationIncludingGravityUpdate"].name;
      ```
      */
      public "HandleMotionAccelerationIncludingGravityUpdate" = this.createEntity("HandleMotionAccelerationIncludingGravityUpdate");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationIncludingGravityY link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityYTypeLinkId = await package["MotionAccelerationIncludingGravityY"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationIncludingGravityY link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityYTypeLinkId = await package["MotionAccelerationIncludingGravityY"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationIncludingGravityY link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityY = await package["MotionAccelerationIncludingGravityY"].name;
      ```
      */
      public "MotionAccelerationIncludingGravityY" = this.createEntity("MotionAccelerationIncludingGravityY");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationIncludingGravityY link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityYTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityY"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationIncludingGravityY link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityYTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityY"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationIncludingGravityY link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityY = await package["TypeOfValueOfMotionAccelerationIncludingGravityY"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationIncludingGravityY" = this.createEntity("TypeOfValueOfMotionAccelerationIncludingGravityY");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationIncludingGravityX link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityXTypeLinkId = await package["MotionAccelerationIncludingGravityX"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationIncludingGravityX link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityXTypeLinkId = await package["MotionAccelerationIncludingGravityX"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationIncludingGravityX link
      ```ts
      const package = new Package({deep});
      const motionAccelerationIncludingGravityX = await package["MotionAccelerationIncludingGravityX"].name;
      ```
      */
      public "MotionAccelerationIncludingGravityX" = this.createEntity("MotionAccelerationIncludingGravityX");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationIncludingGravityX link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityXTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityX"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationIncludingGravityX link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityXTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravityX"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationIncludingGravityX link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityX = await package["TypeOfValueOfMotionAccelerationIncludingGravityX"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationIncludingGravityX" = this.createEntity("TypeOfValueOfMotionAccelerationIncludingGravityX");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionAccelerationIncludingGravity link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravity"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionAccelerationIncludingGravity link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravityTypeLinkId = await package["TypeOfValueOfMotionAccelerationIncludingGravity"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionAccelerationIncludingGravity link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionAccelerationIncludingGravity = await package["TypeOfValueOfMotionAccelerationIncludingGravity"].name;
      ```
      */
      public "TypeOfValueOfMotionAccelerationIncludingGravity" = this.createEntity("TypeOfValueOfMotionAccelerationIncludingGravity");
      /**
      @example
      #### Use id method to get the id of the MotionAccelerationY link
      ```ts
      const package = new Package({deep});
      const motionAccelerationYTypeLinkId = await package["MotionAccelerationY"].id();
      ```
      #### Use localId method to get the local id of the MotionAccelerationY link
      ```ts
      const package = new Package({deep});
      const motionAccelerationYTypeLinkId = await package["MotionAccelerationY"].localId();
      ```
      #### Use name field to get the name of the MotionAccelerationY link
      ```ts
      const package = new Package({deep});
      const motionAccelerationY = await package["MotionAccelerationY"].name;
      ```
      */
      public "MotionAccelerationY" = this.createEntity("MotionAccelerationY");
      /**
      @example
      #### Use id method to get the id of the TypeOfValueOfMotionRotationRateGamma link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateGammaTypeLinkId = await package["TypeOfValueOfMotionRotationRateGamma"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfMotionRotationRateGamma link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateGammaTypeLinkId = await package["TypeOfValueOfMotionRotationRateGamma"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfMotionRotationRateGamma link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfMotionRotationRateGamma = await package["TypeOfValueOfMotionRotationRateGamma"].name;
      ```
      */
      public "TypeOfValueOfMotionRotationRateGamma" = this.createEntity("TypeOfValueOfMotionRotationRateGamma");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
