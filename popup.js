// Initialize check button of dislexia
let changeFont = document.getElementById("dislexia");
console.log(changeFont)

chrome.storage.sync.get("fontFamily", ({ fontFamily }) => {
  changeFont.style.fontFamily = fontFamily;
});

changeFont.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (changeFont.checked) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageFontFamily,
  });
} else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removePageFontFamily,
  });
}

});
// The body of this function will be executed as a content script inside the
// current page
function setPageFontFamily() {
  chrome.storage.sync.get("fontFamily", ({ fontFamily }) => {
  let elements = document.getElementsByTagName("*");
  console.log(elements);
  Array.from(elements).forEach(element => {
    element.setAttribute('style', 'font-family : ' + fontFamily + ' !important');
  });
  });
}

function removePageFontFamily() {
    let elements = document.getElementsByTagName("*");
    console.log(elements);
    Array.from(elements).forEach(element => {
      element.removeAttribute('style');
  });
}

// End of dislexia checked

//Start Timer function

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  //window.close();
}

function clearAlarm() {
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  //window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released
document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('min60').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
