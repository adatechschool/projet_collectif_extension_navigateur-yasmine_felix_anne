chrome.runtime.onInstalled.addListener(buttonClicked)

function buttonClicked() {
  console.log("button clicked !")
}

//let fontFamily = '"Comic Sans MS", Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';
//let fontFamily = 'Roboto Flex, "Andika", "OpenDyslexic", Helvetica';

let fontFamily = 'Open-Dyslexic, Andika, Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontFamily });
});
