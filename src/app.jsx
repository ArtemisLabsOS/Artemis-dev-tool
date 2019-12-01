import React, { useEffect, useState } from "react";
import bglog from "./utils/bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";
import "./stylesheets/style.scss";
import ResultDisplay from "./components/GraphQLResponse.jsx"
const { introspectionQuery } = require('graphql');
const {
  introspect,
  introspectURL,
  introspectFile 
} = require('graphql-introspect');
// const http = require('http');
// console.log(http);
const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  // const [schemas, updateSchema] = useState([]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      if(httpReq.request.postData) {
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        bglog(httpReq.request.postData.text);
        if(IsJsonString(httpReq.request.postData.text)){
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        }
        else {
          requestQuery = httpReq.request.postData.text;
        }
        bglog(['this is requestQUery', requestQuery])
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
  }, [schemas])
  

  bglog(['this is queries', queries]);
  bglog(['this is results', results]);
  return (
    <div>
      {/* {queries}
      {results} */}
      <QueryContainer queries={queries} results={results}/>
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
