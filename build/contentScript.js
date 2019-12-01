// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  switch(msg.msg){
    case "getDOM":
      console.log(document.getElementsByTagName('body')[0].innerHTML);
      sendResponse({msg: document.getElementsByTagName('body')[0].innerHTML});
      break;
  }
  console.log(msg);
});

//send message
const sendMsg = (msg) =>{
  chrome.runtime.sendMessage({greeting: msg}, function(response) {
  console.log(response.farewell);
  })
};

console.log("hello from contentScript");

