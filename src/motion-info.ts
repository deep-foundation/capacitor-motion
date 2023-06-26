import { AccelListenerEvent } from "@capacitor/motion";

/**
 * @example
```ts
const motionInfo: MotionInfo = {
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
 */
export type MotionInfo = AccelListenerEvent;