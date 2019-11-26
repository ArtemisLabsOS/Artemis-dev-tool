import React, { useEffect , useState} from "react";
import bglog from "./utils/bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";


const App = (props) => {
  // console.log('i am in useEffect');
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);

  chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
    if(httpReq.request.postData){
      httpReq.getContent(res => {
        bglog(['this is res',res]);
        const tempArr = results.slice();
        tempArr.push(res);
        bglog(['this is tempArr', tempArr]);
        updateResults(tempArr);
      });
      let requestQuery;
      if(typeof JSON.parse(httpReq.request.postData.text) === "object"){
        requestQuery = JSON.parse(httpReq.request.postData.text).query;
      }
      else {
        requestQuery = httpReq.request.postData.text;
      }
      bglog(["this is response query", requestQuery]);
      const newArr = queries.slice();
      bglog(['this is new Arr', newArr]);
      newArr.push(JSON.stringify({
        time:httpReq.time,
        outgoingQueries: requestQuery
      }));
      updateQueries(newArr);
    }
  });
  bglog(['this is queries', queries]);
  return (
    <div>
      {queries}
      {results}
      <QueryContainer queries ={queries} />
    </div>
  );
};

export default App;
