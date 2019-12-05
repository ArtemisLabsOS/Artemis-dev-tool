import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import Headers from './containers/Headers.jsx';
import Home from '../components/Home.jsx';
import "./stylesheets/style.scss";

const App = props => {
  const [schemaStatus, updateSchemaStatus] = useState(false);
  const [cacheStatus, updateCacheStatus] = useState(false);
  //=====================================
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [historyBtn, historyBtnToggle] = useState(0);
  const [url, updateUrl] = useState("");
  const [cache, updateCache] = useState({});

  const getCache = () => {
    msgToBackground("contentScript", "getCache", response => {
      console.log(response)
      msgToBackground("contentScript", "retrieveCache", response => { updateCache(response) });
    });
  }

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
  //==================================
  useEffect(() => {
    chrome.tabs.executeScript({
      file: "contentScript.js"
    });
  }, []);

  function schemaToggle() {
    updateSchemaStatus(!schemaStatus);
    updateCacheStatus(false);
  }

  function cacheToggle() {
    updateCacheStatus(!cacheStatus);
    updateSchemaStatus(false);
  }

  return (
    <div>
      {queries.length === 0 ? <Home /> : <Headers schemaToggle={schemaToggle} cacheToggle={cacheToggle} />
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus} /> }

      {/* <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle} />
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus} /> */}
    </div>
  );
};

const msgToBackground = function (type, msg, callback, newBody) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type,
        msg,
        newBody
      },
      function (response) {
        callback(response);
      }
    );
  }
};

const IsJsonString = function (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default App;