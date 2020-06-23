import { User, Permission, Role } from "../types/generated"
import * as Auth0Base from 'auth0'


function toUser<T extends Auth0Base.User>({ name, user_id }: T): User | null {
  if (user_id == null) {
    return null
  }

  return {
    name: name ?? null,
    userId: user_id,
    roles: null,
    permissions: null
  }
}

function toPermission({ description, permission_name, resource_server_identifier, resource_server_name }: Auth0Base.Permission): Permission {
  return {
    description: description ?? null,
    permissionName: permission_name ?? null,
    resourceServerIdentifier: resource_server_identifier ?? null,
    resourceServerName: resource_server_name ?? null
  }
}

function toRole({ description, id, name }: Auth0Base.Role): Role {
  return {
    description: description ?? null,
    id: id ?? null,
    name: name ?? null,
    permissions: null
  }
}

export {
  toUser,
  toPermission,
  toRole
}

export * from './ioTs'
export * from './typeguards'