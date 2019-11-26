import React, { useEffect , useState} from "react";
import bglog from "./bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";


const App = (props) => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);

  chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
    bglog(httpReq.response.content);
    if(httpReq.request.postData.text){
      httpReq.getContent(res => {
        const arr = JSON.parse(JSON.stringify(results));
        arr.push(JSON.stringify(res));
        updateResults(arr);
      });
      const requestQuery = JSON.parse(httpReq.request.postData.text);
      const newArr = JSON.parse(JSON.stringify(queries));
      newArr.push(JSON.stringify({
        time:httpReq.time,
        outgoingQueries: requestQuery.query
      }));
      updateQueries(newArr);
    }
  });

  bglog(queries);
  return (
    <div>
      {results}
      <QueryContainer queries ={queries} />
    </div>
  );
};

export default App;
