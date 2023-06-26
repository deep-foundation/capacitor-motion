/**
 * Contains the names of all links within this package. 
 * 
 * @example
```ts
const notifyTypeLinkId = await deep.id(
   PACKAGE_NAME,
   LinkName[LinkName.Notify]
)
```
 */
export enum LinkName {
   Motion,
   MotionAcceleration,
   MotionAccelerationX,
   MotionAccelerationY,
   MotionAccelerationZ,
   MotionAccelerationIncludingGravity,
   MotionAccelerationIncludingGravityX,
   MotionAccelerationIncludingGravityY,
   MotionAccelerationIncludingGravityZ,
   MotionRotationRate,
   MotionRotationRateAlpha,
   MotionRotationRateBeta,
   MotionRotationRateGamma,
   MotionInterval,
   HandleMotionUpdate
}