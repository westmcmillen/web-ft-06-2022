const submit = document.getElementById("submit");
const textArea = document.getElementById("text-area");

submit.onmouseover = () => {
    if (textArea.value.replaceAll(" ", "") === "") {
        submit.style.backgroundColor = "crimson";
    } else {
        submit.style.backgroundColor = "seagreen";
    }
};

submit.onmouseout = () => {
    submit.style.backgroundColor = "hsla(0, 0%, 20%, 100%)";
};
