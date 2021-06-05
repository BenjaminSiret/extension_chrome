//list all the tabs in active window, then display there urls
chrome.tabs.query({}, (tabs) => {
  for (let i = 0; i < tabs.length; i++) {
    console.log(tabs[i].url)
  }
});
