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
  }
});

console.log("hello from contentScript");

