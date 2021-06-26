// création de groupe en dur pour tester
let groups = { sport: [1,4,5], educ: [], culture: []};

// fonction qui récupère la tab en cours
const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// fonction qui affiche la tab en cours
const displayCurrentTab = async () => {
  const tab = await getCurrentTab();
  console.log(tab);
}

displayCurrentTab();

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

