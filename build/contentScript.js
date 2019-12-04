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
      runInPageContext(() => {window.postMessage({ type: "FROM_PAGE", text: window.__APOLLO_CLIENT__.localState.cache.data.data}, "*");}, 'xx-XX');
      sendResponse({msg: "cache requested"});
      break;
    case"retrieveCache":
      sendResponse({msg: cache});
      break;
  }
});

var port = chrome.runtime.connect();
let cache;

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    cache = event.data.text;
  }
}, false);

// Breaks out of the content script context by injecting a specially
// constructed script tag and injecting it into the page.
const runInPageContext = (method, ...args) => {
  // The stringified method which will be parsed as a function object.
  const stringifiedMethod = method instanceof Function
    ? method.toString()
    : `() => { ${method} }`;

  // The stringified arguments for the method as JS code that will reconstruct the array.
  const stringifiedArgs = JSON.stringify(args);

  // The full content of the script tag.
  const scriptContent = `
    // Parse and run the method with its arguments.
    (${stringifiedMethod})(...${stringifiedArgs});

    // Remove the script element to cover our tracks.
    document.currentScript.parentElement
      .removeChild(document.currentScript);
  `;

  // Create a script tag and inject it into the document.
  const scriptElement = document.createElement('script');
  scriptElement.innerHTML = scriptContent;
  document.documentElement.prepend(scriptElement);
};

// Break out of the sandbox and run `overwriteLanguage()` in the page context.

console.log("hello from contentScript");

