/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  console.log({ tabs });
});

chrome.bookmarks.onCreated.addListener(function (bookmark) {
  console.log({ bookmark });
});

/******/ })()
;
//# sourceMappingURL=background.js.map