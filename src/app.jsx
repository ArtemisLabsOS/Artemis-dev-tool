import React, { useEffect, useState } from "react";
import ObserverContainer from "./containers/ObserverContainer.jsx";
import "./stylesheets/style.scss";
import Headers from './containers/Headers.jsx';


const App = props => {
  const [schemaStatus, updateSchemaStatus] = useState(false);
  const [cacheStatus, updateCacheStatus] = useState(false);
  
  useEffect(() => {
    chrome.tabs.executeScript({
      file: "contentScript.js"
    });

    
  }, []);

  function schemaToggle() {
    updateSchemaStatus(!schemaStatus);
    updateCacheStatus(false);
    console.log('this is schema status in toggle func', schemaStatus);
  }

  function cacheToggle() {
    updateCacheStatus(!cacheStatus);
    updateSchemaStatus(false);
    console.log('this is cache status in toggle func', schemaStatus);
  }

  return (
    <React.Fragment>
      <Headers schemaStatus={schemaStatus} cacheStatus={cacheStatus} updateSchemaStatus={updateSchemaStatus} updateCacheStatus={updateCacheStatus} schemaToggle={schemaToggle} cacheToggle={cacheToggle}/>
      <ObserverContainer schemaStatus={schemaStatus} cacheStatus={cacheStatus}/>
    </React.Fragment>
  );
};

export default App;
