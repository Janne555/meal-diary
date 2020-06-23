import * as mongoose from "mongoose";
import { MongooseTypes } from "../types";

const ConfigSchema = new mongoose.Schema<MongooseTypes.FoodSchema>({
  lastFineliUpdate: Date,
  name: String
})

ConfigSchema.method('toClient', function () {
  const obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;

  return obj
})

const baseConfigModel = mongoose.model<MongooseTypes.ConfigSchema, MongooseTypes.ConfigModelType>('AppConfig', ConfigSchema)

class ConfigModel extends baseConfigModel {
  constructor(configInput: never) {
    super(configInput)
  }
}

export default ConfigModel