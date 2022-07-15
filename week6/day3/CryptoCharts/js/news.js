const mainContainer = document.getElementById("main-container");
const form = document.getElementById("form");
const searchBar = document.getElementById("search-bar");

let cards = [];

const getStartDate = () => {
    const date = new Date().toISOString().replace(/-/g, "").replace(/:/g, "").replace(/./g, "");
    return date;
};

const getData = async ticker => {
    const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=CRYPTO:BTC&time_from=${getStartDate()}&limit=200&apikey=${config.API_KEY}`);
    const data = await response.json();
    return data;
};

const createCard = (img, title, url, source) => {
    const card = document.createElement("div");
    card.className = "card";
    const image = document.createElement("div");
    image.className = "image";
    image.style.backgroundImage = `url(${img})`;
    const heading = document.createElement("h2");
    heading.className = "heading";
    heading.innerText = title;
    const link = document.createElement("a");
    link.className = "link";
    link.href = url;
    link.target = "_blank";
    link.innerText = source;
    card.append(image, heading, link);
    return card;
};

const renderCards = async () => {
    const data = await getData();
    cards = Object.values(data.feed).map(feed => {
        const card = createCard(feed.banner_image, feed.title, feed.url, feed.source);
        mainContainer.append(card);
        return { title: feed.title, source: feed.source, element: card };
    });
};

renderCards();

searchBar.oninput = event => {
    const value = event.target.value.toLowerCase();
    cards.forEach(card => {
        const isVisiable = card.title.toLowerCase().includes(value) || card.source.toLowerCase().includes(value);
        card.element.classList.toggle("hide", !isVisiable);
    });
};

form.onsubmit = event => event.preventDefault();
