console.log("Hello background");

chrome.runtime.onInstalled.addListener(buttonClicked)

function buttonClicked() {
  console.log("button clicked !")

}
let fontFamily = 'Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontFamily });
  console.log('Pouette');
});
