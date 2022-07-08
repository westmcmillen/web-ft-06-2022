const nextBtn = document.getElementById("next-btn");
const likeBtn = document.getElementById("like-btn");
const joke = document.getElementById("joke");
const list = document.getElementById("list");

const likedHash = {};

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    joke.innerText = data.joke;
};

const enableBtn = btn => {
    btn.disabled = false;
};

const disableBtn = btn => {
    btn.disabled = true;
};

const addDadJokeToList = () => {
    if (joke.innerText in likedHash) return;
    const li = document.createElement("li");
    li.innerText = joke.innerText;
    list.append(li);
    likedHash[joke.innerText] = (likedHash[joke.innerText] || 0) + 1;
    disableBtn(likeBtn);
};

getDadJoke();

nextBtn.onclick = () => {
    getDadJoke();
    enableBtn(likeBtn);
};
likeBtn.onclick = () => addDadJokeToList();
