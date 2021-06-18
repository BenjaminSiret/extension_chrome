// création de groupe en dur pour tester
let sportGroup = { category: "sport", tabList: [] };
// je remplace la tabList en dur par les vrais ids des tabs
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  for (let i = 0; i < tabs.length; i++) {
    sportGroup.tabList.push(tabs[i].id);
  }
  console.log(sportGroup.tabList);
})


//test de création d'objet groupe
const group = { name: "group", tabList: [] };
const educGroup = Object.create(group);
educGroup.name = "educ";
educGroup.tabList = [6,14];


// définition de la fonction qui ajoute une tab à un groupe de tabs
function addTabToGroup(group, tabId) {
  group.tabList.push(tabId);
}
// appel de la fonction addTabToGroup et test
addTabToGroup(sportGroup, 7);
console.log(sportGroup.tabList);

// définition de la fonction qui permet d'accéder aux ids des onglets d'un groupe donné
function whichTabs(group) {
  return group.tabList.join(", ");
}
// appel de la fonction whichTabs et test
let sportList = whichTabs(sportGroup);
console.log(sportList);


// // affichage des informations sur les onglets ouverts
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

