// création de groupe en dur pour tester
let groups = { sport: [1,4,5], educ: [], culture: []};

// fonction qui récupère les tabs ouvertes
const getOpenedTab = async () => {
  let queryOptions = { currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
}

// fonction qui affiche les tabs ouvertes
const displayOpenedTabs = async () => {
  const tabsList = document.getElementById('tabsList');
  const tabs = await getOpenedTab();
  tabs.forEach((tab) => {
    tabsList.insertAdjacentHTML('beforeend', `<li>${tab.url}</li>`);
  })
}

displayOpenedTabs();

// fonction qui ajoute une tab à un groupe
// test avec le groupe sport
const getCurrentTab = async () => {
  let queryOptions = { currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
const newTab = getCurrentTab();
console.log(newTab);


// affichage des différents groupes ainsi que les urls qui en font partie
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

// displayTabsCategories(groups);

