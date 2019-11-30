import React, { useEffect, useState } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";
import { introspectionQuery } from 'graphql';

const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  // const [schema, updateSchema] = useState('GraphQL schema is not available.');
  // const [logs, updateLogs] = useState([]); 

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      if(httpReq.request.postData) {
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

  // useEffect(() => {
  //   fetchSchemaFromGraphQLServer() {
  //     if(logs.length !== 0) {
        
  //     }
  //   }
  // })

  console.log(['this is queries', queries]);
  console.log(['this is results', results]);

  return (
    <div id="containers">
      <QueryContainer queries={queries} />
      <ResponseContainer results={results} />
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
