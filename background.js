chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("csgofloat.com/db")) {
    console.log("You are the best!")

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      bookmarkId: 'bkmrk1' 
    });
  }
});
