chrome.contextMenus.create({
  id: "quick-rurema-search",
  title: "quick-rurema-search",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "quick-rurema-search":
      var base_url = "http://doc.ruby-lang.org/ja/search/";
      var query = "query:" + info.selectionText;
      chrome.tabs.create({'url': base_url + query, 'active': true});
      break;
  }
});
