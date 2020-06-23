import * as Auth0 from 'auth0'
import env from '../constants/env'
import { Permission, Role, User } from '../types/generated'
import { toPermission, toRole, toUser, isNotNill } from '../utils'
import { DataSource } from '../types'

const auth0 = new Auth0.ManagementClient({
  domain: env.AUTH0_DOMAIN,
  clientId: env.AUTH0_CLIENT_ID,
  clientSecret: env.AUTH0_CLIENT_SECRET,
  scope: 'read:users read:roles',
  audience: env.AUTH0_AUDIENCE
})

class UserDataSource implements DataSource.IUserDataSource {
  async getUserRoles(params: Auth0.ObjectWithId): Promise<Role[]> {
    const roles = await auth0.getUserRoles(params)
    return roles.map(toRole)
  }
  async getUserPermissions(params: Auth0.ObjectWithId): Promise<Permission[]> {
    const permissions = await auth0.getUserPermissions(params)
    return permissions.map(toPermission)
  }
  assignRolestoUser(params: Auth0.ObjectWithId, data: Auth0.RolesData): Promise<void> {
    return auth0.assignRolestoUser(params, data)
  }
  async getUser(params: Auth0.ObjectWithId): Promise<User> {
    const auth0User = await auth0.getUser(params)
    const user = toUser(auth0User)
    if (!user) {
      throw Error("Failed to parse auth0 user to a user. User id is propably not defined")
    } else {
      return user
    }
  }
  async getUsers(): Promise<User[]> {
    const users = await auth0.getUsers()
    return users.map(toUser).filter(isNotNill)
  }
  async getPermissionsInRole(params: Auth0.ObjectWithId): Promise<Permission[]> {
    const permissions = await auth0.getPermissionsInRole(params)
    return permissions.map(toPermission)
  }
}

export default UserDataSource