const API_KEY = config.API_KEY;

const chartNav = document.getElementById("chart-nav");
const tabForm = document.getElementById("tab-form");
const tabInput = document.getElementById("tab-input");
const chartMount = document.getElementById("chart-mount");

const tickerHash = {};

const getTabInputValue = () => {
    const tabInputValue = tabInput.value.toUpperCase();
    return tabInputValue;
};

const clearTabInputValue = () => {
    tabInput.value = null;
    tabInput.blur();
};

const createTabBtnIcon = () => {
    const div = document.createElement("div");
    div.className = "container";
    const i = document.createElement("i");
    i.className = "tab-icon";
    div.append(i);
    return div;
};

const createTabBtn = ticker => {
    const button = document.createElement("button");
    button.className = "tab-btn";
    button.dataset.ticker = ticker;
    button.append(createTabBtnIcon());
    button.append(createTabBtnIcon());
    return button;
};

const createTab = ticker => {
    const div = document.createElement("div");
    div.className = "chart-tab";
    div.dataset.ticker = ticker;
    const h6 = document.createElement("h6");
    h6.className = "chart-ticker";
    h6.innerText = ticker;
    const button = createTabBtn(ticker);
    button.onclick = () => removeTabAndChart(ticker);
    div.append(h6, button);
    div.onclick = () => setTabAndChartToActive(ticker);
    return div;
};

const renderTab = ticker => {
    const tab = createTab(ticker);
    const children = chartNav.firstElementChild.children;
    if (children.length === 5) {
        tabForm.remove();
        chartNav.firstElementChild.append(tab);
    } else {
        chartNav.firstElementChild.insertBefore(tab, chartNav.firstElementChild.lastElementChild);
    }
};

const createChart = ticker => {
    const chart = document.createElement("figure");
    chart.id = chartMount.children.length;
    chart.className = "chart";
    chart.dataset.ticker = ticker;
    return chart;
};

const createCandlestick = (column, row) => {
    const candlestick = document.createElement("div");
    candlestick.className = "candlestick";
    candlestick.style.gridColumn = `${column.start} / ${column.end}`;
    candlestick.style.gridRow = `${row.start} / ${row.end}`;
    return candlestick;
};

const colorCandlestick = (candlestick, row) => {
    if (row.start < row.end) candlestick.style.backgroundImage = "linear-gradient(lightgreen, seagreen)";
    if (row.start > row.end) candlestick.style.backgroundImage = "linear-gradient(crimson, red)";
    if (row.start === row.end) candlestick.style.backgroundImage = "linear-gradient(silver, grey)";
};

const createWick = (column, row) => {
    const wick = document.createElement("div");
    wick.className = "wick";
    wick.style.gridColumn = `${column.start} / ${column.end}`;
    wick.style.gridRow = `${row.start} / ${row.end}`;
    return wick;
};

const getData = async ticker => {
    // const response = await fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${ticker}&market=USD&interval=1min&apikey=${API_KEY}`);
    const response = await fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${ticker}&market=USD&apikey=${config.API_KEY}`);
    const data = await response.json();
    return data;
};

const renderCandlesticks = async chart => {
    const data = await getData(chart.dataset.ticker);
    // const timeSeries = data["Time Series Crypto (1min)"];
    const timeSeries = data["Time Series (Digital Currency Daily)"];
    const ohlc = Object.values(timeSeries);
    // const periodLow = Math.min(...ohlc.map(value => value["3. low"]));
    // const periodHigh = Math.max(...ohlc.map(value => value["2. high"]));
    const periodLow = Math.min(...ohlc.map(value => value["3a. low (USD)"]));
    const periodHigh = Math.max(...ohlc.map(value => value["2a. high (USD)"]));
    const periodRange = Math.ceil(periodHigh - periodLow);

    chart.innerHTML = null;
    chart.style.gridTemplateColumns = `repeat(${ohlc.length * 4}, minmax(0, 1fr))`;

    let colIdx = 0;

    ohlc.map(value => {
        // value["1. open"] = Math.round((value["1. open"] - periodLow) / periodRange / 0.01);
        // value["2. high"] = Math.round((value["2. high"] - periodLow) / periodRange / 0.01);
        // value["3. low"] = Math.round((value["3. low"] - periodLow) / periodRange / 0.01);
        // value["4. close"] = Math.round((value["4. close"] - periodLow) / periodRange / 0.01);
        value["1a. open (USD)"] = Math.round((value["1a. open (USD)"] - periodLow) / periodRange / 0.01);
        value["2a. high (USD)"] = Math.round((value["2a. high (USD)"] - periodLow) / periodRange / 0.01);
        value["3a. low (USD)"] = Math.round((value["3a. low (USD)"] - periodLow) / periodRange / 0.01);
        value["4a. close (USD)"] = Math.round((value["4a. close (USD)"] - periodLow) / periodRange / 0.01);

        // const candlestick = createCandlestick({ start: colIdx, end: colIdx + 3 }, { start: value["1. open"], end: value["4. close"] });
        // colorCandlestick(candlestick, { start: value["1. open"], end: value["4. close"] });
        // const wick = createWick({ start: colIdx + 1, end: colIdx + 2 }, { start: value["2. high"], end: value["3. low"] });
        const candlestick = createCandlestick({ start: colIdx, end: colIdx + 3 }, { start: value["1a. open (USD)"], end: value["4a. close (USD)"] });
        colorCandlestick(candlestick, { start: value["1a. open (USD)"], end: value["4a. close (USD)"] });
        const wick = createWick({ start: colIdx + 1, end: colIdx + 2 }, { start: value["2a. high (USD)"], end: value["3a. low (USD)"] });
        chart.append(wick);
        chart.append(candlestick);
        colIdx += 4;
    });
};

const renderChart = ticker => {
    const chart = createChart(ticker);
    renderCandlesticks(chart);
    chartMount.append(chart);
};

const setTabAndChartToActive = ticker => {
    const chartTabs = document.getElementsByClassName("chart-tab");
    const charts = document.getElementsByClassName("chart");
    [...chartTabs].map(chartTab => {
        chartTab.dataset.state = "inactive";
        switch (chartTab.dataset.ticker) {
            case ticker:
                chartTab.dataset.state = "active";
        }
    });
    [...charts].map(chart => {
        chart.dataset.state = "inactive";
        switch (chart.dataset.ticker) {
            case ticker:
                chart.dataset.state = "active";
        }
    });
};

const createTabForm = () => {
    const form = document.createElement("form");
    form.action = "/";
    form.id = "tab-form";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "tab-input";
    input.placeholder = "+";
    input.autocomplete = "off";
    form.append(input);
    return form;
};

const renderTabForm = () => {
    const tabForm = createTabForm();
    chartNav.firstElementChild.append(tabForm);
    tabForm.onsubmit = event => {
        event.preventDefault();
        const ticker = getTabInputValue();
        if (ticker in tickerHash) {
            setTabAndChartToActive(ticker);
            clearTabInputValue();
        } else {
            tickerHash[ticker] = (tickerHash[ticker] || 0) + 1;
            renderTab(ticker);
            renderChart(ticker);
            setTabAndChartToActive(ticker);
            clearTabInputValue();
        }
    };
};

const removeTabAndChart = ticker => {
    const chartTabs = document.getElementsByClassName("chart-tab");
    const charts = document.getElementsByClassName("chart");
    [...chartTabs].map(chartTab => {
        chartTab.dataset.state = "inactive";
        switch (chartTab.dataset.ticker) {
            case ticker:
                chartTab.remove();
        }
    });
    [...charts].map(chart => {
        chart.dataset.state = "inactive";
        switch (chart.dataset.ticker) {
            case ticker:
                chart.remove();
        }
    });
    if (chartNav.firstElementChild.children.length < 5) {
        tabForm.style.display = "contents";
    }
    if (ticker in tickerHash) {
        delete tickerHash[ticker];
        localStorage.setItem("tickers", JSON.stringify(tickerHash));
    }
};

tabForm.onsubmit = event => {
    event.preventDefault();
    const ticker = getTabInputValue();
    if (ticker in tickerHash) {
        setTabAndChartToActive(ticker);
        clearTabInputValue();
    } else {
        tickerHash[ticker] = (tickerHash[ticker] || 0) + 1;
        localStorage.setItem("tickers", JSON.stringify(tickerHash));
        renderTab(ticker);
        renderChart(ticker);
        setTabAndChartToActive(ticker);
        clearTabInputValue();
    }
};

window.onload = () => {
    const tickers = JSON.parse(localStorage.getItem("tickers"));
    for (let ticker in tickers) {
        tickerHash[ticker] = (tickerHash[ticker] || 0) + 1;
        renderTab(ticker);
        renderChart(ticker);
        setTabAndChartToActive(ticker);
    }
};

let zoom = 1;
chartMount.onscroll = event => {
    const charts = document.getElementsByClassName("chart");
    charts[0].style.width = `${100 + zoom}%`;
    zoom++;
};

const zoomIn = () => {
    const chart = document.getElementsByClassName("chart")[0];
    const width = chart.style.width;
    console.log(width);
    chart.style.width = `${chart.style.width * 2}%`;
};

const zoomOut = () => {
    const chart = document.getElementsByClassName("chart")[0];
    const width = chart.style.width;
    console.log(width);
    chart.style.width = `${chart.style.width * 2}%`;
};

// COMPLETED
// Save to localstorage

// Fix tabForm issue
// Adjust css media quieries
// Hover effects
// Make feedback page
// Make  README.md
// Make blog page
