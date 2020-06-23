import { ApolloServer } from "apollo-server-express";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import { Context, UserToken } from "../types";
import { AuthDirective } from "./directives";
import resolvers from "./resolvers";
import typeDefs from './schema';
import { isToken } from "../utils/typeguards";
import { UserDataSource, FoodDataSource } from "../datasources";
import ConfigDataSource from "../datasources/configDataSource";

const graphqlServer = new ApolloServer({
  typeDefs: [DIRECTIVES].concat(typeDefs) as any, resolvers: { ...resolvers }, context: ({ req }) => {
    const userToken = ((): UserToken | undefined => {
      if (isToken((req as any).user)) {
        const user: UserToken = (req as any).user
        user.hasRoles = function (roles: string[]): boolean {
          return roles.every(role => this.permissions.includes(role))
        }
        return user
      } else {
        return undefined
      }
    })()

    if (userToken) {
      return {
        userDataSource: new UserDataSource(),
        foodDataSource: new FoodDataSource(userToken),
        configDataSource: new ConfigDataSource(),
        userToken
      }
    } else {
      return {}
    }
  },
  schemaDirectives: {
    auth: AuthDirective
  }
});

export default graphqlServer