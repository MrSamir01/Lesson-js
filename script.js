const h1 = document.createElement("h1");
const container = document.getElementById("div");

h1.textContent = "hello JS-3";

container.append(h1);

const input = document.getElementById("input");
const button = document.getElementById("btn");

button.onclick = () => {
  console.log("Хаха ботяра");
};

input.oninput = (event) => {
  console.log(event.target.value);
};

// const form = 
// const
// const