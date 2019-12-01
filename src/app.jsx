import React, { useEffect, useState } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";

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
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  /////////////
  const [historyBtn, historyBtnToggle] = useState(0);
  function isToggle(index) {
    historyBtnToggle(index)
  }

  useEffect(()=>{
    historyBtnToggle(queries.length-1);
  },[queries]);
  ////////

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      if(httpReq.request.postData){
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        console.log(httpReq.request.postData.text);
        if(IsJsonString(httpReq.request.postData.text)){
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        }
        else {
          requestQuery = httpReq.request.postData.text;
        }
        console.log(['this is requestQuery', requestQuery])
        updateQueries(oldQueries => [...oldQueries, {
          time:httpReq.time,
          outgoingQueries: requestQuery
        }]);
      }
    });
  },[]);

  console.log(['this is queries', queries]);
  console.log(['this is results', results]);
 

  return (
    <div id="containers">
     <QueryContainer queries={queries} historyBtn={historyBtn} isToggle={isToggle}/>
     <ResponseContainer results={results} historyBtn={historyBtn}/>
      {console.log('client with caching is:'+client)}
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
      console.log({client})
      </div>
      </ApolloProvider>
    </div>
  );
};





function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

export default App;