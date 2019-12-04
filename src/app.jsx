import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import "./stylesheets/style.scss";
import Headers from './containers/Headers.jsx';

const fetch = require("isomorphic-fetch");
const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema
} = require("graphql/utilities");

import { ApolloProvider } from "react-apollo-hooks";

import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-boost";


const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql/"
});
console.log("this is the link");
console.log(httpLink);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
console.log("this is client");
console.log(client);

const App = props => {
  // const [url, updateUrl] = useState("");
  const [schemaStatus, updateSchemaStatus] = useState(false);
  const [cacheStatus, updateCacheStatus] = useState(false);
  
  useEffect(() => {
    //inject content script
    chrome.tabs.executeScript({
      file: "contentScript.js"
    });
  }, []);

  function schemaToggle() {
    updateSchemaStatus(!schemaStatus);
    updateCacheStatus(false);
    console.log('this is schema status in toggle func', schemaStatus);
  }

  function cacheToggle() {
    updateCacheStatus(!cacheStatus);
    updateSchemaStatus(false);
    console.log('this is cache status in toggle func', schemaStatus);
  }

  return (
    <React.Fragment>
      <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle}/>
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus}/>
      {/* {console.log('client with caching is:'+client)} */}
      <ApolloProvider client={client} cache={client.cache}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "80px repeat(auto-fit, 300px)",
            alignItems: "start",
            height: "calc(100vh - 4px)",
            overflow: "hidden"
          }}
        >
          {/* console.log({client}) */}
        </div>
      </ApolloProvider>
    </React.Fragment>
  );
};

// function graphQLFetcher(url, introspectionQuery) {
//   return fetch(url, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query: introspectionQuery })
//   })
//     .then(response => response.json())
//     .then(resp =>
//       console.log("this is the fetched result for introspection", resp)
//     );
// }

export default App;
