document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('newButton');
    console.log(button);
    console.log("button sent");

    // onClick's logic below:
    button.addEventListener('click', function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {
                "message": "clicked_browser_action",
                "tab": activeTab
            });
        });
    });
});