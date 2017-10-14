import { makeExecutableSchema } from 'graphql-tools';

import schemaDefinition from './schema.graphql';

const schema = makeExecutableSchema({
  typeDefs: schemaDefinition,
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});

export default schema;