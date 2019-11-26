import React, { useEffect, useState} from 'react';
import bglog from './bglog';


const App = (props) => {
  // console.log('i am in useEffect');
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
  })

  bglog(queries);
  return (
    <div>
      {queries}
      {results}
      Hello World; 
      This is test 
    </div>
  )
}

export default App;