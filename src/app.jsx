import React, { useEffect, useState } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";

const fetch = require('isomorphic-fetch');
const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require('graphql/utilities');

import { ApolloProvider } from 'react-apollo-hooks';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';
import CustomGraphiQL from './components/GraphiQL.jsx';
import introspectionQuery from './Utility/introspectionQuery.js';

const httpLink = new HttpLink({
  uri: 'https://api.spacex.land/graphql/',

});
console.log("this is the link")
console.log(httpLink)

const client = new ApolloClient({
	link: httpLink,
  cache: new InMemoryCache(),
});
console.log("this is client");
console.log(client);


const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [url, updateUrl] = useState('');
  
  
  const [historyBtn, historyBtnToggle] = useState(0);
  function isToggle(index) {
    historyBtnToggle(index)
  }

  useEffect(()=>{
    historyBtnToggle(queries.length-1);
  },[queries]);
  
  useEffect(() => {
    
    //inject content script
    chrome.tabs.executeScript({
      file: 'contentScript.js'
    });
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      
      updateUrl(httpReq.request.url);
      if(httpReq.request.postData){
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
          recordHistory(oldHistory => [...oldHistory, ])
        });
        let requestQuery;
        console.log(httpReq.request.postData.text);
        if(IsJsonString(httpReq.request.postData.text)){
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        }
        else {
          requestQuery = httpReq.request.postData.text;
        }
        console.log(['this is requestQUery', requestQuery])
        bglog("getDOM");
        updateQueries(oldQueries => [...oldQueries, {
          time:httpReq.time,
          outgoingQueries: requestQuery
        }]);
      }
    });
  },[]);
  
  
  
  
  
  console.log(['this is queries', queries]);
  console.log('this is url', url);
  console.log(['this is results', results]);
 

  // return (
  //   <div id="containers">
  //    <QueryContainer queries={queries} historyBtn={historyBtn} isToggle={isToggle}/>
  //    <ResponseContainer results={results} historyBtn={historyBtn}/>
  //     {/* {console.log('client with caching is:'+client)} */}
  //     <CustomGraphiQL fetcher={graphQLFetcher}/>
  //     <ApolloProvider client={client} cache={client.cache}>
  //     <div
  //       css={{
  //         display: 'grid',
  //         gridTemplateColumns: '80px repeat(auto-fit, 300px)',
  //         alignItems: 'start',
  //         height: 'calc(100vh - 4px)',
  //         overflow: 'hidden',
  //       }}
  //     >
  //     {/* console.log({client}) */}
  //     </div>
  //     </ApolloProvider>
  //   </div>
  // );
  return (
    <div>
      <CustomGraphiQL editorTheme="solarized light" fetcher={graphQLFetcher}/>
      <button onClick={() => {graphQLFetcher(url, introspectionQuery)}}>Test Button</button>
    </div>
  )
};

let bglog = function(obj) {
  if(chrome && chrome.runtime) {
    chrome.runtime.sendMessage({type: "contentScript", obj: obj}, function(response) {
      console.log(response);
    });
  }
}

function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

function graphQLFetcher(url, introspectionQuery) {
  return fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: introspectionQuery }),
  }).then(response => response.json())
  .then((resp) => console.log('this is the fetched result for introspection', resp));
}

export default App;