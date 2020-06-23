import { createTestClient } from 'apollo-server-testing'
import graphqlServer from '../'
import { ApolloServer } from 'apollo-server-express';

const { query, mutate } = createTestClient(graphqlServer as any)

it('should work', () => {
  
});