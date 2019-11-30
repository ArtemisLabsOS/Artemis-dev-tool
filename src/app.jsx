import React, { useEffect, useState , Component } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";

import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const accessToken = localStorage.getItem('token');

const httpLink = new HttpLink({
  uri: 'https://api.spacex.land/graphql/',
  headers: none,

});

const client = new ApolloClient({
	link: httpLink,
  cache: new InMemoryCache(),
});

const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = usçeState([]);
  const [cache, updateCache] = useState([]);

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
        console.log(['this is requestQUery', requestQuery])
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
      <QueryContainer queries={queries} />
      <ResponseContainer results={results} />
      console.log('client with caching is:'+{client.cache})
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
