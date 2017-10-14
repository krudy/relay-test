import { makeExecutableSchema } from 'graphql-tools';

const schemaDefinition = `
type Query {
  hello: String!
}

schema {
  query: Query
}
`;

const schema = makeExecutableSchema({
  typeDefs: schemaDefinition,
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});

export default schema;
