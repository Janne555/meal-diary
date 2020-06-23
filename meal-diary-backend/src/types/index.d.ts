import * as generated from "./generated"
import * as Auth0 from 'auth0'
import mongoose from 'mongoose'

type Token = {
  sub: string
  permissions: string[]
}

type UserToken = Token & {
  hasRoles(roles: string[]): boolean
}

declare namespace DataSource {
  interface IUserDataSource {
    getPermissionsInRole(params: Auth0.ObjectWithId): Promise<generated.Permission[]>
    getUserRoles(params: Auth0.ObjectWithId): Promise<generated.Role[]>
    getUserPermissions(params: Auth0.ObjectWithId): Promise<generated.Permission[]>
    assignRolestoUser(params: Auth0.ObjectWithId, data: Auth0.RolesData): Promise<void>
    getUser(params: Auth0.ObjectWithId): Promise<generated.User>
    getUsers(): Promise<generated.User[]>
  }

  interface IFoodDataSource {
    getFoods(): Promise<generated.Food[]>
    getFoods(params: Partial<generated.FoodSearchInput>): Promise<generated.Food[]>
    getFood(id: string): Promise<generated.Food | null>
    addFood(foodInput: generated.FoodInput): Promise<generated.Food>
    findOneAndUpdate(filter: mongoose.FilterQuery<MongooseTypes.FoodSchema>, update: mongoose.UpdateQuery<MongooseTypes.FoodSchema>, options?: mongoose.QueryFindOneAndUpdateOptions): Promise<generated.Food | null>
  }

  interface IConfigDataSource {
    getConfig(): Promise<generated.Config>
    updateConfig(params: Partial<generated.Config>): Promise<generated.Config>
    isFineliDataDownloaded(): Promise<boolean>
    setFineliDataDownloaded(value: boolean): Promise<generated.Config>
  }
}

declare namespace MongooseTypes {
  type FoodSchema = generated.FoodDbObject & mongoose.Document & {
    toClient(this: FoodSchema): generated.Food
    owner?: string
  }

  type FoodModelType = mongoose.Model<FoodSchema>

  type ConfigSchema = generated.ConfigDbObject & mongoose.Document & {
    toClient(this: ConfigSchema): generated.Config
    name: string
  }

  type ConfigModelType = mongoose.Model<ConfigSchema>
}

type Context = {
  userToken?: UserToken
  userDataSource?: DataSource.IUserDataSource
  foodDataSource?: DataSource.IFoodDataSource
  configDataSource?: DataSource.IConfigDataSource
}

declare namespace Fineli {
  type ParsedFineliFoodItem = {
    foodid?: string
    name: {
      en?: string
      fi?: string
    }
    enerc?: string
    fat?: string
    choavl?: string
    prot?: string
    alc?: string
    oa?: string
    sugoh?: string
    sugar?: string
    frus?: string
    gals?: string
    glus?: string
    lacs?: string
    mals?: string
    sucs?: string
    starch?: string
    fibc?: string
    fibins?: string
    psacncs?: string
    fol?: string
    niaeq?: string
    nia?: string
    vitpyrid?: string
    ribf?: string
    thia?: string
    vita?: string
    carotens?: string
    vitb12?: string
    vitc?: string
    vitd?: string
    vite?: string
    vitk?: string
    ca?: string
    fe?: string
    id?: string
    k?: string
    mg?: string
    na?: string
    nacl?: string
    p?: string
    se?: string
    zn?: string
    fafre?: string
    fapu?: string
    famcis?: string
    fasat?: string
    fatrn?: string
    fapun3?: string
    fapun6?: string
    f18d2cn6?: string
    f18d3n3?: string
    f20d5n3?: string
    f22d6n3?: string
    chole?: string
    stert?: string
    trp?: string
  }
}

export {
  Context,
  UserToken,
  Token,
  DataSource,
  Fineli,
  MongooseTypes
}