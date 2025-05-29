chrome.runtime.onInstalled.addListener(e=>{e.reason===chrome.runtime.OnInstalledReason.INSTALL&&console.log("Extension installed for the first time."),console.log("Extension installed.")});
