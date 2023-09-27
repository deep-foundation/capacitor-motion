import { MotionDecorator } from "./create-motion-decorator";
import { MakeMotionInsertOperationsOptions } from "./make-motion-insert-operations";
import { MakeMotionValueUpdateSerialOperationsOptions, makeMotionValueUpdateOperations } from "./make-motion-value-update-operations";

export async function updateMotion(this: MotionDecorator,options: UpdateMotionOptions) {
  const operations = await this.makeMotionValueUpdateOperations(options);
  if(operations.length === 0) {
    return []
  }
  const serialResult = await this.serial({
    operations
  })
  return serialResult;
}

export type UpdateMotionOptions = MakeMotionValueUpdateSerialOperationsOptions;