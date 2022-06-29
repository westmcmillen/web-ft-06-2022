const animalFarm = document.querySelector("#animal-farm");
const animalNoise = document.querySelector(".animal-noise");

const makeNosie = noise => {
    animalNoise.innerHTML = noise;
};

const getNoise = () => {
    switch (animalFarm.value) {
        case "pig":
            makeNosie("Oink");
            break;
        case "puppy":
            makeNosie("Bark");
            break;
        case "cat":
            makeNosie("Meow");
            break;
        case "chicken":
            makeNosie("Cluck");
            break;
    }
};

animalFarm.onchange = () => {
    getNoise();
};

window.onload = () => {
    getNoise();
};
