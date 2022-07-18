const hamburger = document.getElementById("hamburger");
const chartNavContainer = document.getElementById("chart-nav-container");
const chartInput = document.getElementById("chart-input");
const chartContainer = document.getElementById("chart-container");
const zoomOut = document.getElementById("zoom-out");
const zoomIn = document.getElementById("zoom-in");

const tickerHash = {};

let magnification = 3;

const getInputValue = () => {
    const chartInput = document.getElementById("chart-input");
    const inputValue = chartInput.value.toUpperCase();
    return inputValue;
};

const clearInputValue = () => {
    const chartInput = document.getElementById("chart-input");
    chartInput.value = null;
    chartInput.blur();
};

const createChartTab = ticker => {
    const chartTab = document.createElement("div");
    chartTab.id = ticker;
    chartTab.className = "chart-tab";
    chartTab.onclick = () => {
        setTabAndChartToActive(ticker);
    };
    return chartTab;
};

const createChartTicker = ticker => {
    const chartTicker = document.createElement("h6");
    chartTicker.className = "chart-ticker";
    chartTicker.innerText = ticker;
    return chartTicker;
};

const createCloseContainer = () => {
    const closeContainer = document.createElement("div");
    closeContainer.className = "close-container";
    return closeContainer;
};

const createCloseIcon = () => {
    const closeIcon = document.createElement("div");
    closeIcon.className = "close-icon";
    return closeIcon;
};

const createChartForm = () => {
    const chartForm = document.createElement("form");
    chartForm.id = "chart-form";
    chartForm.onsubmit = event => {
        event.preventDefault();
        const blankChart = document.getElementById("BLANK");
        const ticker = getInputValue();
        if (blankChart) {
            blankChart.remove();
        }
        if (ticker in tickerHash) {
            setTabAndChartToActive(ticker);
            clearInputValue();
        } else {
            tickerHash[ticker] = (tickerHash[ticker] || 0) + 1;
            localStorage.setItem("tickers_intraday", JSON.stringify(tickerHash));
            renderChartTab(ticker);
            renderChart(ticker);
            setTabAndChartToActive(ticker);
            clearInputValue();
            if (chartNavContainer.children.length > 5) {
                removeChartForm();
            }
        }
    };
    const chartInput = document.createElement("input");
    chartInput.id = "chart-input";
    chartInput.placeholder = "+";
    chartInput.autocapitalize = "characters";
    chartInput.autocomplete = "off";
    chartForm.append(chartInput);
    return chartForm;
};

const renderChartForm = () => {
    const chartForm = createChartForm();
    chartNavContainer.append(chartForm);
};

const createChart = ticker => {
    const chart = document.createElement("figure");
    chart.id = ticker;
    chart.className = "chart";
    chart.dataset.ticker = ticker;
    chart.style.width = `${100 * magnification}%`;
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
    const response = await fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${ticker}&market=USD&interval=5min&outputsize=full&apikey=${config.API_KEY}`);
    const data = await response.json();
    return data;
};

const renderCandlesticks = async chart => {
    const data = await getData(chart.id);
    const timeSeries = data["Time Series Crypto (5min)"];
    const ohlc = Object.values(timeSeries);
    const periodLow = Math.min(...ohlc.map(value => value["3. low"]));
    const periodHigh = Math.max(...ohlc.map(value => value["2. high"]));
    const periodRange = Math.ceil(periodHigh - periodLow);

    chart.innerHTML = null;
    chart.style.gridTemplateColumns = `repeat(${ohlc.length * 4}, minmax(0, 1fr))`;

    let colIdx = 1;

    ohlc.map(value => {
        value["1. open"] = Math.round((value["1. open"] - periodLow) / periodRange / 0.01);
        value["2. high"] = Math.round((value["2. high"] - periodLow) / periodRange / 0.01);
        value["3. low"] = Math.round((value["3. low"] - periodLow) / periodRange / 0.01);
        value["4. close"] = Math.round((value["4. close"] - periodLow) / periodRange / 0.01);

        const wick = createWick({ start: colIdx + 1, end: colIdx + 2 }, { start: value["2. high"], end: value["3. low"] });
        const candlestick = createCandlestick({ start: colIdx, end: colIdx + 3 }, { start: value["1. open"], end: value["4. close"] });
        colorCandlestick(candlestick, { start: value["1. open"], end: value["4. close"] });
        chart.append(wick);
        chart.append(candlestick);
        colIdx += 4;
    });
};

const renderChart = ticker => {
    const chart = createChart(ticker);
    if (ticker !== "CryptoCharts") {
        renderCandlesticks(chart);
    }
    chartContainer.append(chart);
};

const removeChartTab = id => {
    const chartTabs = document.getElementsByClassName("chart-tab");
    [...chartTabs].map(chartTab => {
        switch (id) {
            case chartTab.id:
                chartTab.remove();
        }
    });
};

const removeChart = id => {
    const charts = document.getElementsByClassName("chart");
    [...charts].map(chart => {
        switch (id) {
            case chart.id:
                chart.remove();
        }
    });
};

const removeTickerFromLocalStorage = ticker => {
    if (ticker in tickerHash) {
        delete tickerHash[ticker];
        localStorage.setItem("tickers_intraday", JSON.stringify(tickerHash));
    }
};

const setTabAndChartToActive = ticker => {
    if (ticker in tickerHash) {
        const chartTabs = document.getElementsByClassName("chart-tab");
        const charts = document.getElementsByClassName("chart");
        [...chartTabs].map(chartTab => {
            chartTab.className = "chart-tab";
            switch (chartTab.id) {
                case ticker:
                    chartTab.classList.add("chart-tab--active");
            }
        });
        [...charts].map(chart => {
            chart.style.display = "none";
            switch (chart.id) {
                case ticker:
                    chart.style.display = "grid";
            }
        });
    }
};

const setFirstChartTabToActive = () => {
    const firstChartTab = document.querySelector(".chart-tab");
    if (firstChartTab) {
        setTabAndChartToActive(firstChartTab.id);
    } else {
        renderChart("CryptoCharts");
    }
};

const createClose = ticker => {
    const close = document.createElement("button");
    close.id = ticker;
    close.className = "close";
    close.onclick = () => {
        removeChartTab(close.id);
        removeChart(close.id);
        removeTickerFromLocalStorage(ticker);
        if (chartNavContainer.children.length === 4) {
            const chartForm = document.getElementById("chart-form");
            if (chartForm === null) {
                renderChartForm();
            }
        }
        setFirstChartTabToActive();
    };
    const closeContainerLeft = createCloseContainer();
    const closeIconLeft = createCloseIcon();
    closeContainerLeft.append(closeIconLeft);
    const closeContainerRight = createCloseContainer();
    const closeIconRight = createCloseIcon();
    closeContainerRight.append(closeIconRight);
    close.append(closeContainerLeft);
    close.append(closeContainerRight);
    return close;
};

const renderChartTab = ticker => {
    const chartTab = createChartTab(ticker);
    const chartTicker = createChartTicker(ticker);
    chartTab.append(chartTicker);
    const close = createClose(ticker);
    chartTab.append(close);
    chartNavContainer.insertBefore(chartTab, chartNavContainer.lastElementChild);
    clearInputValue();
};

const removeChartForm = () => {
    const chartForm = document.getElementById("chart-form");
    chartForm.remove();
};

zoomOut.onclick = () => {
    const charts = document.getElementsByClassName("chart");
    if (magnification - 1 < 1) {
        magnification = 1;
    } else {
        magnification -= 1;
    }
    for (let chart of charts) {
        chart.style.width = `${100 * magnification}%`;
    }
};

zoomIn.onclick = () => {
    const charts = document.getElementsByClassName("chart");
    if (magnification + 1 > 10) {
        magnification = 10;
    } else {
        magnification += 1;
    }
    for (let chart of charts) {
        chart.style.width = `${100 * magnification}%`;
    }
};

window.onload = () => {
    renderChartForm();

    if (localStorage.tickers_intraday === undefined) {
        renderChart("CryptoCharts");
        return;
    }

    if (Object.values(JSON.parse(localStorage.tickers_intraday)).length === 0) {
        renderChart("CryptoCharts");
        return;
    }

    const tickers = JSON.parse(localStorage.getItem("tickers_intraday"));
    for (let ticker in tickers) {
        tickerHash[ticker] = (tickerHash[ticker] || 0) + 1;
        renderChartTab(ticker);
        renderChart(ticker);
        setFirstChartTabToActive();
        if (chartNavContainer.children.length > 5) {
            removeChartForm();
        }
    }
};
