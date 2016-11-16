"use strict";

// activate the extension only on the appropriate pages
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostSuffix: '.slackarchive.io'
          },
          css: ['.msg-time']
        })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction(),
        new chrome.declarativeContent.RequestContentScript({js: ['content.js']})
      ]
    }]);
  });
});
