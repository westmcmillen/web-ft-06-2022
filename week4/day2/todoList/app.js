const addTask = todo => {
    const list = document.querySelector("ul");
    const listItem = document.createElement("li");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    const userInput = document.createElement("p");
    userInput.innerText = todo;
    const taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");
    const trash = document.createElement("button");
    trash.classList.add("trash");
    trash.onclick = e => {
        e.target.parentElement.parentElement.parentElement.remove();
    };
    const check = document.createElement("button");
    check.classList.add("check");
    check.onclick = e => {
        e.target.parentElement.parentElement.firstElementChild.setAttribute("style", "text-decoration: line-through;");
    };
    list.append(listItem);
    listItem.append(taskContainer);
    taskContainer.append(userInput, taskButtons);
    taskButtons.append(trash, check);
};

const deleteTask = () => {};

const getUserInput = () => {
    const userInput = document.querySelector("input");
    return userInput.value;
};

const clearUserInput = () => {
    const userInput = document.querySelector("input");
    userInput.value = "";
};

const submit = document.querySelector(".submit");
submit.onclick = () => {
    addTask(getUserInput());
    clearUserInput();
};
