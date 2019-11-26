import React, { useEffect } from "react";
import bglog from "./bglog.js";
import QueryContainer from "./containers/QueryContainer.jsx";

const App = props => {
  // console.log('i am in useEffect');
  alert("started");
  chrome.devtools.network.onRequestFinished.addListener(httpReq => {
    // console.log('i am in useEffect');
    bglog(httpReq.request);
    bglog(httpReq.response);
  });

  useEffect(() => {});

  return (
    <div>
      <QueryContainer />
    </div>
  );
};

export default App;
