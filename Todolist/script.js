let input = document.getElementById("input-todo");
let button = document.getElementById("add");
let result = document.getElementById("results");
let todos = [];
window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => addtodo(todo));
};

button.addEventListener("click", () => {
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  addtodo(input.value);
  input.value = "";
});

function addtodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  result.appendChild(para);
  console.log(todos);
  para.addEventListener("click", () => {
    para.style.cursor = "pointer";
    para.style.textDecoration = "line-through";
    remove(todo);
  });
  para.addEventListener("dblclick", () => {
    para.style.cursor = "pointer";
    result.removeChild(para);
    remove(todo);
  });
  console.log(todos);
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}
