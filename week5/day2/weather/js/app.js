const API_KEY = "6294f856cb4c4ac8ec87a8bc58237151";

const curtain = document.getElementById("app-curtain");
const overview = document.getElementById("overview");
const region = document.getElementById("region");
const degrees = document.getElementById("degrees");
const userInput = document.getElementById("user-input");
const mainHeader = document.getElementById("main-header");
const high = document.getElementById("high");
const low = document.getElementById("low");
const current = document.getElementById("current");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const windSpeed = document.getElementById("wind-speed");
const visibility = document.getElementById("visibility");

const submitButton = document.getElementById("submit-button");

const getUserInput = () => {
    console.log(userInput.value);
    return userInput.value;
};

const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getUserInput()},us&appid=${API_KEY}&units=imperial`;
    const weatherData = await fetch(url);
    const json = await weatherData.json();
    try {
        overview.innerText = json.weather[0].main;
        region.innerText = json.name;
        degrees.innerText = Math.floor(json.main.temp);
        mainHeader.innerText = json.name;
        high.innerText = Math.floor(json.main.temp_max);
        low.innerText = Math.floor(json.main.temp_min);
        current.innerText = Math.floor(json.main.temp);
        feelsLike.innerText = Math.floor(json.main.feels_like);
        humidity.innerText = json.main.humidity;
        sunrise.innerText = json.sys.sunrise;
        sunset.innerText = json.sys.sunset;
        windSpeed.innerText = Math.floor(json.wind.speed);
        visibility.innerText = json.visibility;
    } catch {
        return "There is no data for this region.";
    }
};

getWeatherData();

userInput.onkeyup = () => {
    if (userInput.value.replaceAll(" ", "") !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};

submitButton.onclick = event => {
    event.preventDefault();
    submitButton.disabled = true;
    getWeatherData();
    userInput.value = "";
    degrees.setAttribute("style", "display: none");
    degrees.classList.add("pick-up");
    degrees.removeAttribute("style", "display: none");
};
