chrome.devtools.panels.create("Artimis", null, "panel.html", panel =>
  console.log("hello world")
);

// chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
//   // grab req/ res object and update state to display past queries
//   alert(JSON.stringify(httpReq.request.postData));
// })
