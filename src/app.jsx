import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom'
import QueryContainer from './containers/QueryContainer.jsx';
// import Client from './components/Client.jsx';
import ResponseContainer from './containers/ResponseContainer.jsx';
import "./stylesheets/style.scss";
import injectStyles from './styles';

const { introspectionQuery } = require('graphql');
const {
  introspect,
  introspectURL,
  introspectFile 
} = require('graphql-introspect');

const http = require('http');
console.log(http);

//'react-apollo'
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';


const httpLink = new HttpLink({
  uri: 'https://api.spacex.land/graphql/',
});
console.log("this is the link")
console.log(httpLink)

let cache=  new InMemoryCache(),
const client = new ApolloClient({
  cache: cache,
	link: httpLink,
});
bglog("this is client")
bglog(client)


cache.writeData({
  data: {
    cartItems: [],
  },
});



const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  // const [schemas, updateSchema] = useState([]);
  const [cache, updateCache] = useState([])
  const [client, updateClient] = useState([])
  
  const [historyBtn, historyBtnToggle] = useState(0);
  function isToggle(index) {
    historyBtnToggle(index)
  }

  useEffect(()=>{
    historyBtnToggle(queries.length-1);
    bglog("in use Effect to toggle update")
  },[queries]);





  //for useEffect assign a mutation by using the client.writeFragment to update
  //do not mutate cache directly, will not update automatically like client does
//use of client.writeFragment
//or we can directly do this in the app



  //
  // useEffect(()=>{
  //   client.writeData({ //we must write data from the extracted schema, consider using useQuery
  //write the cache update
  //   })
  // },[client.cache]);

  // useEffect(() => {
  //   client.writeData({})
  // },[client])
  
  useEffect(() => {

  
    //inject content script
    chrome.tabs.executeScript({
      file: 'contentScript.js'
    });
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
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


  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      bglog('this is the second useEffect http request');
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

  console.log(['this is queries', queries]);
  console.log(['this is results', results]);
 
  injectStyles();

  return (
    <div id="containers">
     <QueryContainer queries={queries} historyBtn={historyBtn} isToggle={isToggle}/>
     <ResponseContainer results={results} historyBtn={historyBtn}/>
    <ApolloProvider client={client}>
   
    </ApolloProvider> 
   
      </div>
  
  );
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

export default App;



