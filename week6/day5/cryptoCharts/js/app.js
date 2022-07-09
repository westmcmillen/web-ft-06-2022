const key = config.API_KEY;

const menu = document.getElementById("app-menu");
const menuBtn = document.getElementById("app-menu-btn");

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

const chartNav = document.getElementById("chart-nav");
const addChartBtn = document.getElementById("add-chart-btn");
const newTicker = document.getElementById("new-ticker");

const createChartTab = () => {
    const button = document.createElement("button");
    button.className = "chart-tab";
    button.innerText = newTicker.value;
    chartNav.insertBefore(button, chartNav.children[chartNav.children.length - 1]);
    newTicker.value = "";
};

addChartBtn.onsubmit = event => {
    event.preventDefault();
    createChartTab();
};
