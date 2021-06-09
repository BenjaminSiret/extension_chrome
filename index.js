// liste en dur des ids des tabs que je mets dans le groupe
let tabList = [2,42,43]

// fonction d'ajout de l'id de la nouvelle tab
function newTab() {
  chrome.tabs.onCreated.addListener((tab) => {
  tabList.push(tab.id);
  console.log(tabList);
})}


newTab();

let principal = chrome.tabs.group({tabIds : tabList});




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
