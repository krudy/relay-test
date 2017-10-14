import React from 'react';
import { render } from 'react-dom';
import { QueryRenderer, graphql } from 'react-relay';

import environment from './environment';

import Hello from './Hello';
import schema from './schema';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query srcQuery {
        hello
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return (
          <div style={styles}>
            <Hello name={props.hello} />
            <h2 />
          </div>
        );
      }
      return <div>Loading</div>;
    }}
  />
);

render(<App />, document.getElementById('root'));
