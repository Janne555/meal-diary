import mongoose from 'mongoose'
import { FoodInput } from '../types/generated'
import { MongooseTypes } from '../types'


const FoodSchema = new mongoose.Schema<MongooseTypes.FoodSchema>({
  foodid: String,
  name: {
    en: String,
    fi: String,
  },
  enerc: Number,
  fat: Number,
  choavl: Number,
  prot: Number,
  alc: Number,
  oa: Number,
  sugoh: Number,
  sugar: Number,
  frus: Number,
  gals: Number,
  glus: Number,
  lacs: Number,
  mals: Number,
  sucs: Number,
  starch: Number,
  fibc: Number,
  fibins: Number,
  psacncs: Number,
  fol: Number,
  niaeq: Number,
  nia: Number,
  vitpyrid: Number,
  ribf: Number,
  thia: Number,
  vita: Number,
  carotens: Number,
  vitb12: Number,
  vitc: Number,
  vitd: Number,
  vite: Number,
  vitk: Number,
  ca: Number,
  fe: Number,
  id: Number,
  k: Number,
  mg: Number,
  na: Number,
  nacl: Number,
  p: Number,
  se: Number,
  zn: Number,
  fafre: Number,
  fapu: Number,
  famcis: Number,
  fasat: Number,
  fatrn: Number,
  fapun3: Number,
  fapun6: Number,
  f18d2cn6: Number,
  f18d3n3: Number,
  f20d5n3: Number,
  f22d6n3: Number,
  chole: Number,
  stert: Number,
  trp: Number,
  owner: String
})

FoodSchema.method('toClient', function () {
  const obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;

  return obj
})

const baseFoodModel = mongoose.model<MongooseTypes.FoodSchema, MongooseTypes.FoodModelType>('Food', FoodSchema)

class FoodModel extends baseFoodModel {
  constructor(foodInput: FoodInput) {
    super(foodInput)
  }
}

export default FoodModel