import React, { useEffect } from 'react';

const App = (props) => {
  console.log('i am in useEffect');
  useEffect(() => {
    // chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
    //   console.log('i am in useEffect');
    //   console.log(JSON.parse(httpReq.request.postData.text));
    // })
  })

  return (
    <div>
      Hello World;
      This is test 
    </div>
  )
}

export default App;