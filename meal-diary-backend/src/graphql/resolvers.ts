import { Resolvers, RoleResolvers, UserResolvers } from "../types/generated"
import { Context } from "../types"
import { UnauthorizedRequest } from '../errors'
import core from '@actions/core'


const resolvers: Pick<Resolvers<Context>, 'Mutation' | 'Query'> = {
  Query: {
    users: (_, __, { userDataSource }) => {
      if (userDataSource) {
        return userDataSource.getUsers()
      } else {
        throw new UnauthorizedRequest
      }
    },
    foods: async (_, { params }, { foodDataSource }) => {
      throw Error("wtf")
      console.error("at foods resolver")
      if (foodDataSource) {
        console.error("datasource available")
        return foodDataSource.getFoods(params ?? {})
      } else {
        console.error("not authorized")
        throw new UnauthorizedRequest
      }
    },
    config: (_, __, { configDataSource }) => {
      if (configDataSource) {
        return configDataSource.getConfig()
      } else {
        throw new UnauthorizedRequest
      }
    },
    food: (_, { id }, { foodDataSource }) => {
      if (foodDataSource) {
        return foodDataSource.getFood(id)
      } else {
        throw new UnauthorizedRequest
      }
    }
  },
  Mutation: {
    assignRoleToUser: async (_, { roleIds, userId }, { userDataSource }) => {
      if (userDataSource) {
        await userDataSource.assignRolestoUser({ id: userId }, { roles: roleIds })
        return userDataSource.getUser({ id: userId })
      } else {
        throw new UnauthorizedRequest
      }
    },
    updateConfig: async (_, params, { configDataSource }) => {
      if (configDataSource) {
        try {
          const config = await configDataSource.updateConfig(params.config)
          return {
            code: "200",
            success: true,
            message: "Config updated succesfully",
            config
          }
        } catch (error) {
          const config = await configDataSource.getConfig()
          return {
            code: "500",
            success: false,
            message: `Failed to update config: ${error.message}`,
            config
          }
        }
      } else {
        throw new UnauthorizedRequest
      }

    },
    addFood: async (_, { food }, { foodDataSource }) => {
      if (foodDataSource) {
        const storedFood = await foodDataSource.addFood(food)
        return {
          code: "",
          message: "",
          success: true,
          food: storedFood
        }
      } else {
        throw new UnauthorizedRequest
      }
    }
  }
}

const Role: Partial<RoleResolvers<Context>> = {
  permissions: async (r, _, { userDataSource }) => {
    if (userDataSource) {
      return r.id ? (await userDataSource.getPermissionsInRole({ id: r.id })) : null
    } else {
      throw new UnauthorizedRequest
    }
  }
}

const User: Partial<UserResolvers<Context>> = {
  roles: async (u, _, { userDataSource }) => {
    if (userDataSource) {
      return u.userId ? (await userDataSource.getUserRoles({ id: u.userId })) : null
    } else {
      throw new UnauthorizedRequest
    }
  },
  permissions: async (u, _, { userDataSource }) => {
    if (userDataSource) {
      return u.userId ? (await userDataSource.getUserPermissions({ id: u.userId })) : null
    } else {
      throw new UnauthorizedRequest
    }
  }
}

export default {
  ...resolvers,
  Role,
  User
}