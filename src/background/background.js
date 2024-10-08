chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  console.log({ tabs });
});

chrome.bookmarks.onCreated.addListener(function (bookmark) {
  console.log({ bookmark });
});

chrome.action.onClicked.addListener(function(tab) {
  console.log({tab});
  
  chrome.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    files: ['contentScript.js'],

  });
});
