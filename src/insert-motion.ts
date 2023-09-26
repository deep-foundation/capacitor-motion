import { GetMotionInsertSerialOperationsParam, getMotionInsertSerialOperations } from "./get-motion-insert-serial-operations";

export async function InsertMotion(options: InsertMotionOptions) {
  const operations = await getMotionInsertSerialOperations(options);
  if(operations.length === 0) {
    return []
  }
  const serialResult = await options.deep.serial({
    operations
  })
  return serialResult;
}

export type InsertMotionOptions = GetMotionInsertSerialOperationsParam;