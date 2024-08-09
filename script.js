const title = document.getElementById("samir");
console.log(title);
const containerElement = document.getElementsByClassName("container");
console.log(containerElement);

//! NodeList
//? 1) Element node
//? 2) Comment node
//? 3) Text node
//? 4) document node

const list = document.getElementById("list");
const listItem = document.getElementsByClassName("list-item");

for (const item of listItem) {
  console.dir(item);
}

const userName = prompt("Ваше имя:");

const privet = document.getElementById("privet");
privet.textContent = "Hello, " + userName;

