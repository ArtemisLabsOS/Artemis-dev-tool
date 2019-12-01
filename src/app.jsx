import React, { useEffect, useState } from "react";
import QueryContainer from "./containers/QueryContainer.jsx";
import ResponseContainer from './containers/ResponseContainer.jsx'
import "./stylesheets/style.scss";

const App = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [historyBtn, historyBtnToggle] = useState(0);
  function isToggle(index) {
    historyBtnToggle(index)
  }

  useEffect(()=>{
    historyBtnToggle(queries.length-1);
  },[queries]);
  ////////

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
  
  console.log(['this is queries', queries]);
  console.log(['this is results', results]);

  return (
    <div id="containers">
      <QueryContainer queries={queries} historyBtn={historyBtn} isToggle={isToggle}/>
      <ResponseContainer results={results} historyBtn={historyBtn}/>
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