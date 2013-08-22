var contextMenu = require("context-menu");
var tabs = require("tabs")

var menuItem = contextMenu.Item({
  label: "quick-rurema-search",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    tabs.open("http://doc.ruby-lang.org/ja/search/query:" + selectionText);
  }
});
