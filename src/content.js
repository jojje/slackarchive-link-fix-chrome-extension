"use strict";

// Token index in the '/' delimited URL where the search term resides.
const SEARCH_TERM_INDEX = 4;

// Removes the search term from date links before the user clicks the link
function fixLink(evt) {
  try {
    let el = evt.target;
    if(! (el.tagName === 'A' && el.parentElement.className === 'msg-time')) return;
    el.href = el.href.split('/').map((s, i) => i === SEARCH_TERM_INDEX ? '-' : s).join('/');
  } catch(e) {
      console.error('Failed to fix link: ', e);
  }
}

try {
  document.body.addEventListener('mouseover', fixLink, false);
  console.debug('slackarchive.io link fixer activated');
} catch(e) {
  console.debug('Failed to activate slackarchive.io link fixer: ', e);
}
