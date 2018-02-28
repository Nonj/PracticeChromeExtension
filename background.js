// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "clicked_browser_action"
        });
    });
});

// receives the message from content.js and utilizes the chrome.tabs API to 
// open a new tab using the passed in URL from content.js since background.js cannot grab URLs 
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            chrome.tabs.create({
                "url": request.url
            });
        }
    }
);