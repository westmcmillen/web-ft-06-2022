const chart = document.getElementById("chart");

const plotChart = async () => {
    const response = await fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=1min&apikey=${config.API_KEY}`);
    const json = await response.json();
    const timeSeries = json["Time Series Crypto (1min)"];
    const ohlc = Object.values(timeSeries);

    const periodLow = Math.min(...ohlc.map(value => value["3. low"]));
    const periodHigh = Math.max(...ohlc.map(value => value["2. high"]));
    const periodRange = Math.ceil(periodHigh - periodLow);

    chart.style.gridTemplateColumns = `repeat(${ohlc.length * 4}, minmax(0, 1fr))`;

    let column = 1;

    chart.innerHTML = null;

    ohlc.reverse().map(value => {
        value["1. open"] = Math.round((value["1. open"] - periodLow) / periodRange / 0.01);
        value["2. high"] = Math.round((value["2. high"] - periodLow) / periodRange / 0.01);
        value["3. low"] = Math.round((value["3. low"] - periodLow) / periodRange / 0.01);
        value["4. close"] = Math.round((value["4. close"] - periodLow) / periodRange / 0.01);
        console.log(value["1. open"], value["2. high"], value["3. low"], value["4. close"]);

        const candlestick = document.createElement("div");
        candlestick.className = "candlestick";
        candlestick.style.gridRow = `${value["1. open"]} / ${value["4. close"]}`;
        candlestick.style.gridColumn = `${column} / ${column + 3}`;

        const wick = document.createElement("div");
        wick.className = "wick";
        wick.style.gridRow = `${value["2. high"]} / ${value["3. low"]}`;
        wick.style.gridColumn = `${column + 1} / ${column + 2}`;

        if (value["1. open"] < value["4. close"]) {
            candlestick.style.backgroundImage = "linear-gradient(crimson, red)";
        }

        if (value["1. open"] > value["4. close"]) {
            candlestick.style.backgroundImage = "linear-gradient(lightgreen, seagreen)";
        }

        if (value["1. open"] === value["4. close"]) {
            candlestick.style.backgroundImage = "linear-gradient(silver, grey)";
        }
        chart.append(wick);
        chart.append(candlestick);
        column = column + 4;
    });
};

// plotChart();
// setInterval(() => {
//     plotChart();
// }, 60 * 1000);
