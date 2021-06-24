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


// affichage des informations avec insertAdjacentHTML
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  let div = document.getElementById('target_div');
  div.insertAdjacentHTML('beforebegin', `<h3>Voici les onglets ouverts : </h3>`);
  for (let i = 0; i < tabs.length; i++ ) {
    div.insertAdjacentHTML('afterbegin', `l'onglet numero ${i + 1} est ouvert sur le site suivant: ${tabs[i].url}` );
    div.insertAdjacentHTML('afterbegin', `..........`);
  }

})
