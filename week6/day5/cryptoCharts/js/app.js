const appNav = document.getElementById("app-nav");
const hamburger = document.getElementById("hamburger");

hamburger.onclick = () => {
    switch (hamburger.dataset.state) {
        case "collapsed":
            hamburger.dataset.state = "expanded";
            appNav.dataset.state = "expanded";
            break;
        default:
            hamburger.dataset.state = "collapsed";
            appNav.dataset.state = "collapsed";
    }
};

const chartNav = document.getElementById("chart-nav");
const tabForm = document.getElementById("tab-form");
const tabInput = document.getElementById("tab-input");

const getTabInputValue = () => {
    const tabInputValue = tabInput.value;
    return tabInputValue;
};

const clearTabInputValue = () => {
    tabInput.value = null;
    tabInput.blur();
};

const createTab = input => {
    const tab = document.createElement("div");
    const ticker = document.createElement("h6");
    tab.className = "chart-tab";
    ticker.className = "chart-ticker";
    ticker.innerText = input;
    tab.append(ticker);
    return tab;
};

const renderTab = tab => {
    const children = chartNav.firstElementChild.children;
    if (children.length === 5) {
        tabForm.remove();
        chartNav.firstElementChild.append(tab);
    } else {
        chartNav.firstElementChild.insertBefore(tab, chartNav.firstElementChild.lastElementChild);
    }
};

const addTab = () => {
    renderTab(createTab(getTabInputValue()));
    clearTabInputValue();
};

tabForm.onsubmit = event => {
    event.preventDefault();
    addTab();
};
