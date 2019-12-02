import React, { useEffect, useState } from "react";
import Query2 from "../components/Query2.jsx";
import GraphQLResponse from '../components/GraphQLResponse.jsx';
import HistoryOfPastQueries from '../components/HistoryOfPastQueries.jsx'

const ObserverContainers = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);  
  const [historyBtn, historyBtnToggle] = useState(0);

  function isToggle(index) {
    historyBtnToggle(index)
    msgToBackground("contentScript", "rerenderDOM", response => console.log(response), history[index]);
  }

  useEffect(()=>{
    historyBtnToggle(queries.length-1);
  },[queries]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
      if(httpReq.request.postData){
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        if(IsJsonString(httpReq.request.postData.text)){
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        }
        else {
          requestQuery = httpReq.request.postData.text;
        }
        msgToBackground("contentScript", "getDOM", response => recordHistory(oldHistory => [...oldHistory, response.msg]));
        updateQueries(oldQueries => [...oldQueries, {
          time:httpReq.time,
          outgoingQueries: requestQuery
        }]);
      }
    });
  },[]);

  console.log('this is history', history);
  return (
    <div id="observerContainers">
      <HistoryOfPastQueries queries={queries} isToggle={isToggle}/>
      <Query2 queries={queries} historyBtn={historyBtn}/>
      <GraphQLResponse results={results} historyBtn={historyBtn}/>
    </div>
  );
}

const msgToBackground = function(type, msg, callback, newBody) {
  if(chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      type, 
      msg,
      newBody
    }, function(response) {
      callback(response);
    });
  }
}

const IsJsonString = function(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

export default ObserverContainers;