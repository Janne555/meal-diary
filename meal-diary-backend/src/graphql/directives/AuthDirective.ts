import { SchemaDirectiveVisitor } from 'apollo-server'
import { GraphQLObjectType, defaultFieldResolver, GraphQLField } from 'graphql'
import { Context } from '../../types';
import { UnauthorizedRequest } from '../../errors';

class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(object: GraphQLObjectType<any, Context>): void {
    Object.values(object.getFields()).forEach(this.visitFieldDefinition.bind(this))
  }

  visitFieldDefinition(field: GraphQLField<any, Context, Record<string, any>>): void {
    const { resolve = defaultFieldResolver } = field
    const requiredPermissions = this.args.requires
    field.resolve = async function (...args) {
      if (!requiredPermissions) {
        return resolve.apply(this, args)
      }

      const { userToken } = args[2]

      if (!userToken?.hasRoles(requiredPermissions)) {
        throw new UnauthorizedRequest(`Not authorized. Action requires permissions ${requiredPermissions.join(", ")}`)
      }

      return resolve.apply(this, args)
    }
  }
}

export default AuthDirective