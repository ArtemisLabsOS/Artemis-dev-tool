import React, { useEffect, useState } from "react";
import bglog from "./utils/bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";
import "./stylesheets/style.scss";
import ResultDisplay from "./components/GraphQLResponse.jsx"

const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);

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

  
    // chrome.devtools.network.onRequestFinished.addListener((httpRequest) => {
    //   bglog('THIS IS THE REQUEST BODY', httpRequest);
    // })
  

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
