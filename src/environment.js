import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { graphql } from 'graphql';
import schema from './schema';

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return graphql(schema, operation.text, null, null, variables);
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store,
});

export default environment;
