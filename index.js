// création de groupe en dur pour tester
let group = { sport: [], educ: [], culture: []};

// je remplace la tabList en dur par les vrais ids des tabs
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  for (let i = 0; i < tabs.length; i++) {
    group.sport.push(tabs[i].url);
  }
  // console.log(Object.keys(group));
})


// affichage des informations avec insertAdjacentHTML
chrome.tabs.query({currentWindow: true}, (tab) => {
  let tabsList = document.getElementById('tabsList');
  tabsList.insertAdjacentHTML('beforebegin', `<h3>Onglets ouverts: </h3>`);
  for (let i = 0; i < tab.length; i++ ) {
    tabsList.insertAdjacentHTML('beforeend',`<li> ${tab[i].url} </li>`);
  }
})

// affichage des différents groupes ainsi que les urls qui en font partie
Object.keys(group).forEach((category) => {
  console.log(group[category]);
  let categoriesList = document.getElementById('categoriesList');
  categoriesList.insertAdjacentHTML('beforeend',`<li> ${category} </li>`);
});
