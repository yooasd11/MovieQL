import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import client from "./ApolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        Hello!
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
