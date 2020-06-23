import { gql } from "apollo-server";
import food from './food'

const schema = gql`
  directive @auth(
    requires: [String!]!,
  ) on OBJECT | FIELD_DEFINITION

  directive @i8n on FIELD_DEFINITION

  scalar Date

  type Config @entity {
    lastFineliUpdate: Date @column
  }

  input SearchFloatInput {
    value: Float!
    comparisonOperator: ComparisonOperator
  }

  enum ComparisonOperator {
    LT
    GT
  }

  input SearchStringInput {
    value: String!
    regex: Boolean
    flags: String
  }
  
  type User @auth(requires: ["read:users"]) {
    name: String
    userId: String!
    roles: [Role!]
    permissions: [Permission!]
  }

  type Role @auth(requires: ["read:roles"]) {
    id: String
    name: String
    description: String
    permissions: [Permission!]
  }

  type Permission @auth(requires: []) {
    resourceServerIdentifier: String
    permissionName: String
    resourceServerName: String
    description: String
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type ConfigMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    config: Config
  }
  
  type FoodMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    food: Food
  }

  input UpdateConfigInput {
    lastFineliUpdate: Date
  }

  type Query {
    users: [User!] @auth(requires: ["read:users"])
    foods(params: FoodSearchInput): [Food!]!
    food(id: ID!): Food
    config: Config! @auth(requires: ["read:config"])
  }

  type Mutation {
    assignRoleToUser(userId: String!, roleIds: [String!]!): User! @auth(requires: ["read:users", "read:roles", "update:roles"])
    updateConfig(config: UpdateConfigInput!): ConfigMutationResponse! @auth(requires: ["read:config", "update:config"])
    addFood(food: FoodInput!): FoodMutationResponse!
  }

  ${food}
`

export default [schema]