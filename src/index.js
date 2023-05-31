import "./styles.css";

const btn1 = document.getElementById("my-button");
const h1 = document.querySelector("h1");

btn1.addEventListener("click", () => {
  console.log("hello world");
  h1.textContent = "My notebook";
});

const ul = document.querySelector("ul");
const input = document.querySelector("textarea");
const addBtn = document.getElementById("add-data");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = input.value;
  //input.value = "";
  ul.appendChild(li);
});
