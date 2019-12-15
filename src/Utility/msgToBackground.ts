const msgToBackground = function (type: string, msg: string, callback: (arg0: any) => void, newBody:string) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type,
        msg,
        newBody
      },
      function (response) {
        callback(response);
      }
    );
  }
};

export default msgToBackground;