let todosFormEl = document.getElementById("todos-form");
let todosInputEl = document.getElementById("todos-input");
let todosEl = document.getElementById("todos-ul");
let todosAlertEl = document.getElementById("todos-alert");
let btnAddEl = document.getElementById("todos-enter");

function addTask() {
  if (todosInputEl.value === "") {
    todosAlertEl.innerText = "No task added!!! Add some task ...";
    setTimeout(function () {
      todosAlertEl.innerText = "";
    }, 3000);
  } else {
    let listEl = document.createElement("li");
    let listParaEl = document.createElement("p");
    listParaEl.innerHTML = todosInputEl.value;
    listEl.classList.add("lists", "list-item");
    listParaEl.classList.add("lists", "list-text");
    listEl.appendChild(listParaEl);
    todosEl.appendChild(listEl);

    let spanEl = document.createElement("span");
    spanEl.innerHTML = "X";
    spanEl.classList.add("list-cross");
    listEl.appendChild(spanEl);
  }
  todosInputEl.value = "";
  saveToDoList();
}

const saveToDoList = () => {
  localStorage.setItem("todos-data", todosEl.innerHTML);
};

const showToDoList = () => {
  todosEl.innerHTML = localStorage.getItem("todos-data");
};

todosEl.addEventListener("click", (evt) => {
  if (evt.target.tagName === "P") {
    evt.target.classList.toggle("checked");
  } else if (evt.target.tagName === "LI") {
    evt.target.firstElementChild.classList.toggle("checked");
  } else if (evt.target.tagName === "SPAN") {
    evt.target.parentElement.remove();
  }
  saveToDoList();
});

btnAddEl.addEventListener("click", addTask);
todosFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

export { addTask, showToDoList };
