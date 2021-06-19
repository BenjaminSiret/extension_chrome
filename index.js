// création de groupe en dur pour tester
let group = { sport: [], educ: [], culture: []};

// je remplace la tabList en dur par les vrais ids des tabs
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  for (let i = 0; i < tabs.length; i++) {
    group.sport.push(tabs[i].url);
  }
  // console.log(Object.keys(group));
})

// affichage des différents groupes ainsi que les urls qui en font partie
Object.keys(group).forEach((category) => {
  console.log(category, ":", group[category]);
});


// // définition de la fonction qui ajoute une tab à un groupe de tabs
// function addTabToGroup(group, tabId) {
//   group.tabList.push(tabId);
// }
// // appel de la fonction addTabToGroup et test
// addTabToGroup(sportGroup, 7);
// console.log(sportGroup.tabList);

// // définition de la fonction qui permet d'accéder aux ids des onglets d'un groupe donné
// function whichTabs(group) {
//   return group.tabList.join(", ");
// }
// // appel de la fonction whichTabs et test
// let sportList = whichTabs(sportGroup);
// console.log(sportList);


// affichage des informations sur les onglets ouverts
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  document.write(`<h3>Voici les onglets ouverts :</h3>`);
  document.write('<ul>');
  for (let i = 0; i < tabs.length; i++) {
    document.write(`<li>url : ${tabs[i].url}</li>`);
    document.write(`<li>id de la tab : ${tabs[i].id}</li>`);
    document.write(`-----------------`);
  }
  document.write('</ul>');
});

