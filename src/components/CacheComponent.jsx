import React from "react";
import { ApolloProvider } from 'react-apollo-hooks';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';

const CacheComponent = props => {

const http = require('http');
console.log(http);


const httpLink = new HttpLink({
  uri: 'https://api.spacex.land/graphql/',

});
console.log("this is the link")
console.log(httpLink)

const client = new ApolloClient({
	link: httpLink,
  cache: new InMemoryCache(),
});
console.log("this is client")
console.log(client)


    return (
    <ApolloProvider client={client} cache={client.cache}>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(auto-fit, 300px)',
          alignItems: 'start',
          height: 'calc(100vh - 4px)',
          overflow: 'hidden',
        }}
      >
      {/* console.log({client}) */}
      </div>
      </ApolloProvider>
    )
}


export default CacheComponent;

