chrome.runtime.onInstalled.addListener()

// function buttonClicked() {
//   console.log("button clicked !")
// }

//let fontFamily = '"Comic Sans MS", Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';
//let fontFamily = 'Roboto Flex, "Andika", "OpenDyslexic", Helvetica';

let fontFamily = 'Open-Dyslexic, Andika, Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontFamily });
});

chrome.alarms.onAlarm.addListener(() => {
  chrome.action.setBadgeText({ text: '' });
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'stay_hydrated.png',
    title: 'Time to Hydrate',
    message: 'Everyday I\'m Guzzlin\'!',
    buttons: [
      { title: 'Keep it Flowing.' }
    ],
    priority: 0
  });
});

chrome.notifications.onButtonClicked.addListener(async () => {
  const item = await chrome.storage.sync.get(['minutes']);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: item.minutes });
});
