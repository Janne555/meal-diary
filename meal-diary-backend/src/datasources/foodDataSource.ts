import { DataSource, MongooseTypes, UserToken } from "../types";
import { FoodInput, Food, FoodSearchInput, User } from "../types/generated"
import { FoodModel } from "../mongodb";
import { QueryFindOneAndUpdateOptions, FilterQuery, UpdateQuery } from "mongoose";

// todo  move these to constants
const keys = [
  "enerc",
  "fat",
  "choavl",
  "prot",
  "alc",
  "oa",
  "sugoh",
  "sugar",
  "frus",
  "gals",
  "glus",
  "lacs",
  "mals",
  "sucs",
  "starch",
  "fibc",
  "fibins",
  "psacncs",
  "fol",
  "niaeq",
  "nia",
  "vitpyrid",
  "ribf",
  "thia",
  "vita",
  "carotens",
  "vitb12",
  "vitc",
  "vitd",
  "vite",
  "vitk",
  "ca",
  "fe",
  "iod",
  "k",
  "mg",
  "na",
  "nacl",
  "p",
  "se",
  "zn",
  "fafre",
  "fapu",
  "famcis",
  "fasat",
  "fatrn",
  "fapun3",
  "fapun6",
  "f18d2cn6",
  "f18d3n3",
  "f20d5n3",
  "f22d6n3",
  "chole",
  "stert",
  "trp"
] as const

class FoodDataSource implements DataSource.IFoodDataSource {
  private user: UserToken

  constructor(user: UserToken) {
    this.user = user
  }

  async getFoods(params: Partial<FoodSearchInput> = {}): Promise<Food[]> {
    const query = FoodModel.find({ $or: [{ owner: "Fineli" }, { owner: this.user.sub }] })

    if (params.name?.en) {
      const { value, flags, regex } = params.name.en
      query.find({ 'name.en': regex ? new RegExp(value, flags ?? "") : value })
    }

    if (params.name?.fi) {
      const { value, flags, regex } = params.name.fi
      query.find({ 'name.fi': regex ? new RegExp(value, flags ?? "") : value })
    }

    keys.forEach(key => {
      const field = params[key]
      if (field) {
        const searchTerms = field.map(({ value, comparisonOperator }) => {
          if (comparisonOperator) {
            return { [key]: { [`$${comparisonOperator.toLowerCase()}`]: value } }
          } else {
            return { [key]: value }
          }
        })
        query.and(searchTerms)
      }
    })

    const foodDocs = await query.exec()
    return foodDocs.map(doc => doc.toClient())
  }

  async getFood(id: string): Promise<Food | null> {
    //todo decide if this should be user specific
    const foodDoc = await FoodModel.findById(id)
    return foodDoc?.toClient() ?? null
  }

  async addFood(foodInput: FoodInput): Promise<Food> {
    //todo add created and updated fields
    const foodDoc = new FoodModel(foodInput)
    foodDoc.owner = this.user.sub
    await foodDoc.save()
    return foodDoc.toClient()
  }

  async findOneAndUpdate(filter: FilterQuery<MongooseTypes.FoodSchema>, update: UpdateQuery<MongooseTypes.FoodSchema>, options: QueryFindOneAndUpdateOptions = {}): Promise<Food | null> {
    //todo decide if this should be user specific

    const foodDoc = await FoodModel.findOneAndUpdate(filter, update, {
      ...options
    })
    return foodDoc?.toClient() ?? null
  }
}

export default FoodDataSource