import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import Headers from './containers/Headers.jsx';
import Home from './components/Home.jsx';
import msgToBackground from './Utility/msgToBackground.js'
import "./stylesheets/style.scss";
// import DropdownMenu from "./components/DropdownMenu.jsx";
const App = () => {
  const [schemaStatus, updateSchemaStatus] = useState(false);
  const [cacheStatus, updateCacheStatus] = useState(false);
  const [queries, updateQueries] = useState([]);
  const [results, updateResults] = useState([]);
  const [history, recordHistory] = useState([]);
  const [historyBtn, historyBtnToggle] = useState(0);
  const [url, updateUrl] = useState("");
  const [cache, updateCache] = useState({});
  const [visualizerStatus, updateVisualizer] = useState(false);

<<<<<<< HEAD
=======
  const getCache = () => {
    msgToBackground("contentScript", "getCache", response => {
      console.log(response)
      msgToBackground("contentScript", "retrieveCache", response => { updateCache(response) });
    });
  }

  const isToggle = (index) => {
    historyBtnToggle(index);
  }

>>>>>>> 22608d2a90e2c49f34e22c3b8e60ac39c66c8e89
  useEffect(() => {
    historyBtnToggle(queries.length - 1);
  }, [queries]);

  useEffect(() => {
    chrome.tabs.executeScript({
      file: "contentScript.js"
    });
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

  const schemaToggle = () => {
    updateSchemaStatus(!schemaStatus);
    updateCacheStatus(false);
    updateVisualizer(false);
  }

  const cacheToggle = () => {
    updateCacheStatus(!cacheStatus);
    updateSchemaStatus(false);
    updateVisualizer(false);
  }

  const visualizerToggle = () => {
    updateVisualizer(!visualizerStatus);
    updateCacheStatus(false);
    updateSchemaStatus(false);
  }
  
  const getCache = () => {
    msgToBackground("contentScript", "getCache", response => {
      console.log(response)
      msgToBackground("contentScript", "retrieveCache", response => { updateCache(response) });
    });
  }

  function isToggle(index) {
    historyBtnToggle(index);
  }

  return (
    <React.Fragment>
      {queries.length === 0 ? <Home /> : <Headers schemaToggle={schemaToggle} cacheToggle={cacheToggle} visualizerToggle={visualizerToggle} />}
      {queries.length === 0 ? null : <ObserverContainer queries={queries} isToggle={isToggle} historyBtn={historyBtn} results={results} url={url} schemaStatus={schemaStatus} cacheStatus={cacheStatus} getCache={getCache} cache={cache} history={history} visualizerStatus={visualizerStatus} />}
    </React.Fragment>
  );
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