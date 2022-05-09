chrome.runtime.onInstalled.addListener(buttonClicked)

function buttonClicked() {
  console.log("button clicked !")

}

//let fontFamily = '"Comic Sans MS", Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';
let fontFamily = '"Comic Sans MS"';



chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontFamily });
});
