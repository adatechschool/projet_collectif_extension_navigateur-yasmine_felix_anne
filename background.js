//Initialize new Font Family
let fontFamily = 'Helvetica, Arial, Tahoma, Lucida, Verdana, sans-serif';


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontFamily });
  console.log('Pouette');
});
//End font family
