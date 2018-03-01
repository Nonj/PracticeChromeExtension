// content.js

// Receives message from background.js everytime the extension gets clicked.
// if the message is clicked_broswer_action we print the current tab's URL
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            // Sends the URL of the clicked page back to background.js
            // as a json format  
            chrome.runtime.sendMessage({
                "message": "open_new_tab",
                "url": firstHref
            });
        }
    }
);