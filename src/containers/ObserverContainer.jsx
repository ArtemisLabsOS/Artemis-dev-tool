import React, { useEffect, useState } from "react";
import HistoryOfPastQueries from "../components/HistoryOfPastQueries.jsx";
import Query2 from "../components/Query2.jsx";
import GraphQLResponse from "../components/GraphQLResponse.jsx";
import Schema from "../components/Schema.jsx";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache.jsx";

const ObserverContainers = props => {
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [historyBtn, historyBtnToggle] = useState(0);
  const [url, updateUrl] = useState("");
  
  function isToggle(index) {
    historyBtnToggle(index);
    msgToBackground(
      "contentScript",
      "rerenderDOM",
      response => console.log(response),
      history[index]
    );
  }

  useEffect(() => {
    historyBtnToggle(queries.length - 1);
  }, [queries]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(httpReq => {
      
      if (httpReq.request.postData) {
        updateUrl(httpReq.request.url);
        httpReq.getContent(res => {
          updateResults(oldResults => [...oldResults, res]);
        });
        let requestQuery;
        if (IsJsonString(httpReq.request.postData.text)) {
          requestQuery = JSON.parse(httpReq.request.postData.text).query;
        } else {
          requestQuery = httpReq.request.postData.text;
        }
        msgToBackground("contentScript", "getDOM", response =>
          recordHistory(oldHistory => [...oldHistory, response.msg])
        );
        updateQueries(oldQueries => [
          ...oldQueries,
          {
            time: httpReq.time,
            outgoingQueries: requestQuery
          }
        ]);
      }
    });
  }, []);

  console.log("this is history", history);
  
  console.log('this is props in observer', props);
  
  return (
    <React.Fragment>
      <div id="observerContainers">
        <HistoryOfPastQueries queries={queries} isToggle={isToggle} />
        <Query2 queries={queries} historyBtn={historyBtn} />
        <GraphQLResponse results={results} historyBtn={historyBtn} />
        { props.schemaStatus ? <Schema historyBtn={historyBtn} url={url} queries={queries}/> : null }
        { props.cacheStatus ? <ApolloGraphQLCache historyBtn={historyBtn} url={url} queries={queries}/> : null}
        {/* <button id="cache" onClick={getCache}> Get Cache  </button> */}
      </div>
    </React.Fragment>
  );
};

const msgToBackground = function(type, msg, callback, newBody) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type,
        msg,
        newBody
      },
      function(response) {
        callback(response);
      }
    );
  }
};

const getCache=() =>{
  msgToBackground("contentScript", "getCache", response => {
    console.log(response)
    msgToBackground("contentScript", "retrieveCache", response => {console.log(response)} );
  });
}

const IsJsonString = function(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default ObserverContainers;
