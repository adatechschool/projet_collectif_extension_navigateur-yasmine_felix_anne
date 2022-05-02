changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: welcome,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function welcome() {
    chrome.storage.sync.get("color", ({ color }) => {
     
  }