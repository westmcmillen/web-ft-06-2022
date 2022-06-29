const todoList = document.querySelector("ul");
const userInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");

const createListItem = () => {
    const listItem = document.createElement("li");
    listItem.id = new Date().getTime();
    listItem.dataset.complete = "false";
    listItem.onclick = event => {
        switch (event.target.className) {
            case "check-btn":
                switch (listItem.dataset.complete) {
                    case "true":
                        return (listItem.dataset.complete = "false");
                    case "false":
                        return (listItem.dataset.complete = "true");
                }
            case "trash-btn":
                // console.log(event.currentTarget.id);
                deleteTask(event.currentTarget.id);
                listItem.remove();
                updateTaskIndex();
                break;
        }
    };
    listItem.ondblclick = () => {
        switch (listItem.dataset.complete) {
            case "true":
                return (listItem.dataset.complete = "false");
            case "false":
                return (listItem.dataset.complete = "true");
        }
    };
    return listItem;
};

const getUserInput = () => {
    return userInput.value;
};

const clearUserInput = () => {
    userInput.value = "";
};

const getTaskIndex = () => {
    return todoList.childElementCount + 1;
};

const createTaskIndex = () => {
    const taskIndex = document.createElement("h2");
    return taskIndex;
};

const createTaskText = () => {
    const taskText = document.createElement("p");
    taskText.innerText = getUserInput();
    return taskText;
};

const createTaskBtns = () => {
    const taskBtns = document.createElement("div");
    taskBtns.classList.add("task-btns");
    return taskBtns;
};

const createTrashBtn = () => {
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    return trashBtn;
};

const createCheckBtn = () => {
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    return checkBtn;
};

const addTask = (id = null, userInput = null) => {
    const listItem = createListItem();
    const taskIndex = createTaskIndex();
    const taskText = createTaskText();
    const taskBtns = createTaskBtns();
    const checkBtn = createCheckBtn();
    const trashBtn = createTrashBtn();

    if (id) {
        listItem.id = getTaskIndex();
    }

    if (userInput) {
        taskText.innerText = userInput;
    }

    taskBtns.append(checkBtn, trashBtn);
    listItem.append(taskIndex, taskText, taskBtns);
    todoList.append(listItem);
};

const updateTaskIndex = () => {
    for (let i = 0; i < todoList.childElementCount; i++) {
        todoList.children[i].dataset.index = i;
        todoList.children[i].firstElementChild.innerText = `${i + 1}.`;
    }
};

const toggleSubmitBtnDisabled = () => {
    switch (getUserInput().length) {
        case 0:
            submitBtn.disabled = true;
            break;
        default:
            submitBtn.disabled = false;
    }
};

const saveTask = id => {
    localStorage.setItem(id, getUserInput());
    console.log(localStorage);
};

const deleteTask = id => {
    localStorage.removeItem(id);
    console.log(localStorage);
};

// Add Tasks From Local Storage
for (let [id, userInput] of Object.entries(localStorage)) {
    console.log(id, userInput);
    addTask(id, userInput);
    updateTaskIndex();
}

userInput.onkeyup = event => toggleSubmitBtnDisabled(event);

submitBtn.onclick = event => {
    event.preventDefault();
    addTask();
    updateTaskIndex();
    const listItems = document.querySelectorAll("li");
    saveTask(listItems[listItems.length - 1].id);
    clearUserInput();
};

console.log(localStorage);

// Clear Local Storage
const header = document.querySelector("h1");
header.onclick = () => {
    const listItems = document.querySelectorAll("li");
    listItems.forEach(listItem => listItem.remove());
    localStorage.clear();
};
