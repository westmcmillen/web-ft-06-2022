const API_KEY = config.API_KEY;

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

// Chart
const chartMount = document.getElementById("chart-mount");

const plotChart = async ticker => {
    const response = await fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${ticker}&market=USD&interval=1min&apikey=${API_KEY}`);
    const json = await response.json();
    const timeSeries = json["Time Series Crypto (1min)"];
    const ohlc = Object.values(timeSeries);

    const periodLow = Math.min(...ohlc.map(value => value["3. low"]));
    const periodHigh = Math.max(...ohlc.map(value => value["2. high"]));
    const periodRange = Math.ceil(periodHigh - periodLow);

    const chart = document.createElement("figure");
    chart.id = getTabInputValue();
    chart.className = "chart";

    chart.style.gridTemplateColumns = `repeat(${ohlc.length * 4}, minmax(0, 1fr))`;

    let columnIndex = 1;

    chart.innerHTML = null;

    ohlc.map(value => {
        value["1. open"] = Math.round((value["1. open"] - periodLow) / periodRange / 0.01);
        value["2. high"] = Math.round((value["2. high"] - periodLow) / periodRange / 0.01);
        value["3. low"] = Math.round((value["3. low"] - periodLow) / periodRange / 0.01);
        value["4. close"] = Math.round((value["4. close"] - periodLow) / periodRange / 0.01);

        const candlestick = document.createElement("div");
        candlestick.className = "candlestick";
        candlestick.style.gridRow = `${value["1. open"]} / ${value["4. close"]}`;
        candlestick.style.gridColumn = `${columnIndex} / ${columnIndex + 3}`;

        const wick = document.createElement("div");
        wick.className = "wick";
        wick.style.gridRow = `${value["2. high"]} / ${value["3. low"]}`;
        wick.style.gridColumn = `${columnIndex + 1} / ${columnIndex + 2}`;

        if (value["1. open"] > value["4. close"]) {
            candlestick.style.backgroundImage = "linear-gradient(crimson, red)";
        }

        if (value["1. open"] < value["4. close"]) {
            candlestick.style.backgroundImage = "linear-gradient(lightgreen, seagreen)";
        }

        if (value["1. open"] === value["4. close"]) {
            candlestick.style.backgroundImage = "linear-gradient(silver, grey)";
        }
        chart.append(wick);
        chart.append(candlestick);
        columnIndex = columnIndex + 4;
    });
    chartMount.append(chart);
};

// chart end

tabForm.onsubmit = event => {
    event.preventDefault();
    plotChart(getTabInputValue());
    addTab();
};
