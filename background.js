chrome.runtime.onInstalled.addListener(function (object) {
    let externalUrl = "https://leet-bot.onrender.com/installapp";

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: externalUrl }, function (tab) {
            console.log("New tab launched");
        });
    }
});