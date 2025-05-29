// public/background.js
chrome.runtime.onInstalled.addListener((details) => {

  if(details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log("Extension installed for the first time.");
  }

  console.log("Extension installed.");
});



function applyDefaultSettings() {
  const defaultSettings = {
    enabled: true,
    // Add other default settings here
  };

  chrome.storage.sync.set(defaultSettings, () => {
    console.log("Default settings applied.");
  });
}
