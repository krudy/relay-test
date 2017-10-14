import React from 'react';
import { graphql } from 'graphql';
import { render } from 'react-dom';

import Hello from './Hello';
import schema from './schema';

graphql(
  schema,
  `
  query {
    hello
  }
  `,
).then(result => {
  console.log(result);
});

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2 />
  </div>
);

render(<App />, document.getElementById('root'));
