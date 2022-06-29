const todoList = document.querySelector("ul");
const userInput = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");

const updateTaskIndex = () => {
    for (let i = 0; i < todoList.childElementCount; i++) {
        todoList.children[i].firstElementChild.innerText = `${i + 1}.`;
    }
};

const createListItem = () => {
    const listItem = document.createElement("li");
    listItem.dataset.complete = "false";
    listItem.onclick = e => {
        switch (e.target.className) {
            case "trash-btn":
                deleteTask(e);
                listItem.remove();
                updateTaskIndex();
                break;
            case "check-btn":
                switch (listItem.dataset.complete) {
                    case "true":
                        return (listItem.dataset.complete = "false");
                    case "false":
                        return (listItem.dataset.complete = "true");
                }
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

const createTask = () => {
    return {
        listItem: createListItem(),
        taskIndex: createTaskIndex(),
        taskText: createTaskText(),
        taskBtns: createTaskBtns(),
        checkBtn: createCheckBtn(),
        trashBtn: createTrashBtn(),
    };
};

const addTask = () => {
    const task = createTask();
    task.taskBtns.append(task.checkBtn, task.trashBtn);
    task.listItem.append(task.taskIndex, task.taskText, task.taskBtns);
    todoList.append(task.listItem);
};

const toggleSubmitBtnDisabled = e => {
    if (e.target.value.replaceAll(" ", "").length === 0) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
};

const saveTask = () => {
    localStorage.setItem("task", userInput.value);
};

const deleteTask = e => {
    console.log(e.currentTarget.children);
    // localStorage.removeItem(e.currentTarget.children[2].innerText);
};

for (let i = 0; i < localStorage.length; i++) {
    const task = createTask();
    task.taskText.innerText = localStorage[i];
    task.taskBtns.append(task.checkBtn, task.trashBtn);
    task.listItem.append(task.taskIndex, task.taskText, task.taskBtns);
    todoList.append(task.listItem);
    updateTaskIndex();
    console.log(localStorage);
}

userInput.onkeydown = e => toggleSubmitBtnDisabled(e);
userInput.onkeyup = e => toggleSubmitBtnDisabled(e);

submitBtn.onclick = e => {
    e.preventDefault();
    saveTask();
    addTask();
    updateTaskIndex();
    clearUserInput();
};

// localStorage.clear();
