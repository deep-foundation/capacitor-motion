import { GetMotionInsertSerialOperationsParam } from "./get-motion-insert-serial-operations";
import { GetMotionValueUpdateSerialOperationsParam, getMotionValueUpdateSerialOperations } from "./get-motion-value-update-serial-operations";

export async function UpdateMotion(options: UpdateMotionOptions) {
  const operations = await getMotionValueUpdateSerialOperations(options);
  if(operations.length === 0) {
    return []
  }
  const serialResult = await options.deep.serial({
    operations
  })
  return serialResult;
}

export type UpdateMotionOptions = GetMotionValueUpdateSerialOperationsParam;