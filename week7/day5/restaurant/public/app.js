const appList = document.querySelector("#app-list");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const appForm = document.querySelector("#app-form");
const button = document.querySelector("button");

const createListItem = () => {
  const li = document.createElement("li");
  li.className = "review";
  return li;
};

const createHeading = restaurant => {
  const h2 = document.createElement("h2");
  h2.innerText = restaurant;
  return h2;
};

const createParagraph = message => {
  const p = document.createElement("p");
  p.innerText = message;
  return p;
};

const createReview = () => {
  const listItem = createListItem();
  const heading = createHeading(input.value);
  const paragraph = createParagraph(textarea.value);
  listItem.append(heading, paragraph);
  return listItem;
};

const renderReview = () => {
  const review = createReview();
  appList.append(review);
};

button.onclick = async () => {
  const response = await fetch("http://127.0.0.1:3000/", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      restaurant: input.value,
      message: textarea.value,
    }),
  });
  const json = await response.json();
  renderReview();
  [input.value, textarea.value] = [null, null];
};
