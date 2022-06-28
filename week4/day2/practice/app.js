// const heading = document.querySelector("#heading");
// const list = document.querySelector("#list");
// const burger = document.querySelector("#burger");

// const addListItem = () => {
//     const listItem = document.createElement("li");
//     list.append(listItem);
// };

// heading.innerHTML = "Toppings";
// burger.classList.add("list-item");

// addListItem();

const container = document.querySelector("#container");

// const nav = document.createElement("nav");
// container.append(nav);

// const h1 = document.createElement("h1");
// h1.innerText = "HighOnCoding";
// nav.append(h1);

// const home = document.createElement("a");
// home.innerText = "Home";
// nav.append(home);

// const categories = document.createElement("a");
// categories.innerText = "Categories";
// nav.append(categories);

const addElement = (tag, text = "", parent) => {
    const element = document.createElement(tag);
    if (text.length !== 0) {
        element.innerText = text;
    }
    parent.append(element);
    return element;
};

const nav = addElement("nav", "", container);
const h1 = addElement("h1", "HighOnCoding", nav);
const home = addElement("a", "Home", nav);
const categories = addElement("a", "Categories", nav);
