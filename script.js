const form = document.getElementById("form");
const list = document.getElementById("list");
const input = document.getElementById("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.ariaValueMax.trim();

  if (title) {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };
    todos.push(newTodo);
  } else {
    alert("Пожалуйста введите в поле ввода");
    return;
  }
});

const renderTodo = (arrayTodos) => {
  arrayTodos.map((todoshka)=>{
    const li = document.createElement("li")

    const span = document.createElement("span")
    span.textContent = todoshka.title
  })
}
