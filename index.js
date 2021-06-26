// création de groupe en dur pour tester
const groups = { sport: [], educ: [], culture: []};

// je remplace la tabList en dur par les vrais ids des tabs
chrome.tabs.query({currentWindow: true}, (tabs) => {
  for (let i = 0; i < tabs.length; i++) {
    groups.sport.push(tabs[i].url);
  }
// console.log(Object.keys(groups));

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
// Object.keys(group).forEach((category) => {
//   console.log(group[category]);
//   let categoriesList = document.getElementById('categoriesList');
//   categoriesList.insertAdjacentHTML('beforeend',`<li> ${category} </li>`);
// });

const displayTabsCategories = (tabsCategories) => {
  const categories = Object.keys(tabsCategories);
  const categoriesList = document.getElementById('categoriesList');
  categories.forEach((category) => {
    categoriesList.insertAdjacentHTML('beforeend', `<li>${category}</li>`);
    const categoryTabs = tabsCategories[category];
    categoryTabs.forEach((categoryTab) => {
      const tabs = document.getElementById('tabs');
      tabs.insertAdjacentHTML('beforeend', `<li>${categoryTab}</li>`)
    })
  })
}

displayTabsCategories(groups);

