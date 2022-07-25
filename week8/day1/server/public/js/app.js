const btn = document.getElementById("btn");
const name = document.getElementById("name");
const address = document.getElementById("address");
btn.onclick = async () => {
  const response = await fetch("/restaurants/create_restaurant", {
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
      name: name.value,
      address: address.value,
      reviewScore: null,
    }),
  });
  const json = await response.json();
  console.log(json);
};

alert("Test");
