// Initialize check button of dislexia
let changeFont = document.getElementById("dislexia");

chrome.storage.sync.get("fontFamily", ({ fontFamily }) => {
  changeFont.style.fontFamily = fontFamily;
});


changeFont.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageFontFamily,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageFontFamily() {
  chrome.storage.sync.get("fontFamily", ({ fontFamily }) => {
    //let title = document.getElementsByTagName("h1");
    //console.log(title);
    document.body.style.fontFamily = fontFamily;
    //document.title.style.fontFamily = fontFamily;
  });
}

// End of dislexia checked
