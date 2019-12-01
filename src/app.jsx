import React, { useEffect, useState } from "react";
import ObserverContainer from './containers/ObserverContainer.jsx';
import "./stylesheets/style.scss";
const { introspectionQuery } = require('graphql');
const {
  introspect,
  introspectURL,
  introspectFile 
} = require('graphql-introspect');
const http = require('http');
console.log(http);

import { ApolloProvider } from 'react-apollo-hooks';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';


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

const App = props => {
  useEffect(() => {
    //inject content script
    chrome.tabs.executeScript({
      file: 'contentScript.js'
    });
  },[]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      console.log('this is the second useEffect http request');
      // httpReq.getContent((res) => {
        // bglog(res);
      // })
      // bglog(httpReq.request.postData.text);

      // httpReq.request.url gets us the http end point
      console.log(httpReq.request);
      console.log(httpReq.request.url);

      introspect(httpReq.request.url)
      // .then((output) => {
      //   // output is supposed to be the schema

      //   console.log(output.json());
      //   return output.json();
      //   console.log('hi');
      // })
      .then((output) => output.json())
      .catch((err) => console.log('I AM ERROR', err));
    })
  })

  return (
    <div>
      <ObserverContainer/>
      {/* {console.log('client with caching is:'+client)} */}
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
    </div>
  );
};



export default App;