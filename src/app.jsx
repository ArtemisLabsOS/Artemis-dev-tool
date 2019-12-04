import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import "./stylesheets/style.scss";
// import injectStyles from './containers/styles';


const fetch = require("isomorphic-fetch");
const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema
} = require("graphql/utilities");

// import { ApolloProvider } from "react-apollo-hooks";
// import { useQuery } from "@apollo/react-hooks"
// import gql from 'graphql-tag';

// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
// import { ApolloClient } from "apollo-boost";
import CustomGraphiQL from "./components/GraphiQL.jsx";
import introspectionQuery from "./Utility/introspectionQuery.js";




// const httpLink = new HttpLink({
//   uri: "https://api.spacex.land/graphql/"
// });
// console.log("this is the link");
// console.log(httpLink);

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });
// console.log("this is client");
// console.log(client);

const App = props => {
  // const [url, updateUrl] = useState("");
  useEffect(() => {
    //inject content script

    // injectStyles();

    // client.cache.writeData({data: "data"})
    chrome.tabs.executeScript({
      file: "contentScript.js"
    });

    
  }, []);

  //move the useQuery hook with the get query statement into the main container


  return (
    <React.Fragment>
      <ObserverContainer />
      
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
