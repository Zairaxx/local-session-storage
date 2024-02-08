let btn = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");
let todoInput = document.querySelector("#todo");
let todos = [];

let onRender = () => {
  //Kollar om det finns data i localStorage
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    //Skapa li för varje todo i localStorage

    todos.forEach((todo, i) => {
      let li = document.createElement("li");
      li.innerText = todo;
      todoList.append(li);
      //delete-knapp
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Complete";
      li.append(deleteBtn);

      //Hitta och ta bort index för denna todo i array

      deleteBtn.addEventListener("click", () => {
        li.remove();
        let newTodoList = todos.filter((t, index) => i !== index);
        todos = [...newTodoList];
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("Funkar", localStorage.getItem("todos"));
      });
    });
  }
};

btn.addEventListener("click", () => {
  //Lägger till en todo
  let li = document.createElement("li");
  let newTodo = todoInput.value;
  li.innerText = newTodo;

  //delete-knapp
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Complete";
  li.append(deleteBtn);

  //Hitta och ta bort index för denna todo i array
  let currentIndex = todos.length;

  deleteBtn.addEventListener("click", () => {
    li.remove();
    let newTodoList = todos.filter((todo, i) => i !== currentIndex);
    todos = [...newTodoList];
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  todoList.append(li);
  todoInput.value = "";

  //Spara värden i localstorage
  todos.push(newTodo);
  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
});

onRender();
