import React, { useEffect } from 'react';
import bglog from './bglog';

const App = (props) => {
  // console.log('i am in useEffect');
  alert('started');
  chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
    // console.log('i am in useEffect');
    bglog(httpReq.request);
    bglog(httpReq.response);
  })


  useEffect(() => {

  })

  return (
    <div>
      Hello World; 
      This is test 
    </div>
  )
}

export default App;