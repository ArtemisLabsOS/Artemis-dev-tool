import React, { useEffect, useState } from "react";
import bglog from "./utils/bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";
import "./stylesheets/style.scss";
import ResultDisplay from "./components/GraphQLResponse.jsx";

const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);

  chrome.devtools.network.onRequestFinished.addListener(httpReq => {
    bglog(httpReq.response.content);
    bglog(httpReq.request);
    if(httpReq.request.postData){
      httpReq.getContent(res => {
        const tempArr = results.slice();
        tempArr.push(res);
        updateResults(tempArr);
      });
      let requestQuery;
      if(typeof JSON.parse(httpReq.request.postData.text) === "object"){
        requestQuery = JSON.parse(httpReq.request.postData.text).query;
      }
      else {
        requestQuery = httpReq.request.postData.text;
      }
      const newArr = queries.slice();
      newArr.push(JSON.stringify({
        time:httpReq.time,
        outgoingQueries: requestQuery
      }));
      updateQueries(newArr);
    }
  });
  bglog(['this is queries', queries]);
  bglog(['this is results', results]);
  return (
    <div>
      {/* {queries}
      {results} */}
      <QueryContainer queries={queries} />
      <ResultDisplay results={results}/>
    </div>
  );
};

export default App;
