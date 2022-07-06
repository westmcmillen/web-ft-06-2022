const joke = document.getElementById("joke");

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    joke.innerText = data.joke;
};

getDadJoke();
