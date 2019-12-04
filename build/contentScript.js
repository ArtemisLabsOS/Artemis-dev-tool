// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  switch(msg.msg){
    case "getDOM":
      sendResponse({msg: document.getElementsByTagName('body')[0].innerHTML});
      break;
    case "rerenderDOM":
      console.log(msg);
      document.getElementsByTagName('body')[0].innerHTML = msg.newBody;
      sendResponse({msg: "rerender done"});
      break;

    case "getCache":
      console.log("this is getCache message" ,msg)
      console.log("this is window", window);
      console.log("this is window.__apollo_client__", window.__APOLLO_CLIENT__);
      console.log("this is window", window);
      console.log("this is window.__apollo_client__", window.__APOLLO_CLIENT__);

      sendResponse({ msg: window.__APOLLO_CLIENT__.localState.cache.data.data })
      break;

  }
});

console.log("hello from contentScript");

