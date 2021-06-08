let tabs = [2,84,85]
let principal = chrome.tabs.group({tabIds : tabs});



chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  document.write(`<h3>Voici les onglets ouverts :</h3>`);
  document.write('<ul>');
  for (let i = 0; i < tabs.length; i++) {
    document.write(`<li>url : ${tabs[i].url}</li>`);
    document.write(`<li>id de la tab : ${tabs[i].id}</li>`);
    document.write(`<li>id du groupe : ${tabs[i].groupId}</li>`);
    document.write(`-----------------`);
  }
  document.write('</ul>');
});
