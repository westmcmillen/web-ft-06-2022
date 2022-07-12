const key = config.API_KEY;

const menu = document.getElementById("app-menu");
const menuBtn = document.getElementById("app-menu-btn");
const chartNav = document.getElementById("chart-nav");
const addTab = document.getElementById("add-tab");
const tabTicker = document.getElementById("add-tab-ticker");
const chartData = document.getElementById("chart-data");

menuBtn.onclick = () => {
    switch (menu.dataset.state) {
        case "collapsed":
            menu.dataset.state = "expanded";
            menuBtn.dataset.state = "expanded";
            break;
        default:
            menu.dataset.state = "collapsed";
            menuBtn.dataset.state = "collapsed";
    }
};

const createChartTab = ticker => {
    const button = document.createElement("button");
    button.className = "chart-tab";
    button.innerText = ticker;
    return button;
};

const insertChartTab = chartTab => {
    chartNav.insertBefore(chartTab, chartNav.lastElementChild);
};

const appendChartTab = chartTab => {
    chartNav.append(chartTab);
};

const clearTabTicker = () => {
    tabTicker.value = "";
    tabTicker.blur();
};

const clearTabState = () => {
    for (let tab of chartNav.children) {
        tab.dataset.state = "";
    }
};

const setTabState = tab => {
    clearTabState();
    tab.dataset.state = "active";
};

addTab.onsubmit = event => {
    event.preventDefault();
    chartData.dataset.state = "";
    if (chartNav.children.length < 8) {
        const ticker = tabTicker.value;
        const tab = createChartTab(ticker);
        insertChartTab(tab);
        clearTabTicker();
        setTabState(tab);
        return;
    }
    if (chartNav.children.length === 8) {
        const ticker = tabTicker.value;
        const tab = createChartTab(ticker);
        addTab.remove();
        appendChartTab(tab);
        clearTabState();
        setTabState(tab);
        return;
    }
};
