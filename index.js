// création de groupes en dur pour tester
let sportGroup = { category: "sport", tabList: [1,3,54] };
let principalGroup = { category: "principal", tabList: [2,7,45] };

// définition de la fonction qui ajouter une tab à un groupe de tabs
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

let sportList = whichTabs(sportGroup);
console.log(sportList);

// affichage des informations sur les onglets ouverts
// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
//   document.write(`<h3>Voici les onglets ouverts :</h3>`);
//   document.write('<ul>');
//   for (let i = 0; i < tabs.length; i++) {
//     document.write(`<li>url : ${tabs[i].url}</li>`);
//     document.write(`<li>id de la tab : ${tabs[i].id}</li>`);
//     document.write(`<li>id du groupe : ${tabs[i].groupId}</li>`);
//     document.write(`-----------------`);
//   }
//   document.write('</ul>');
// });
