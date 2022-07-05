const API_KEY = "6294f856cb4c4ac8ec87a8bc58237151";

const container = document.getElementById("container");
const dataSet = document.getElementsByClassName("data-set");
const zipCode = document.getElementById("zip-code");
const submitButton = document.getElementById("submit-button");

const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${zipCode.value},us&appid=${API_KEY}&units=imperial`;
    const weatherData = await fetch(url);
    const json = await weatherData.json();
    try {
        // Object.values(json.main).forEach(value => {
        //     renderData(`${value}`);
        // });
    } catch {
        return "There is no data for this location.";
    }
    console.log(json);
};

zipCode.onkeyup = () => {
    if (zipCode.value.replace(" ", "") === "") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
};

submitButton.onclick = event => {
    event.preventDefault();
    getWeatherData();
};
