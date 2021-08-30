const addBtn = document.getElementById('add');
const inputEl = document.getElementById('input')
const listEl = document.getElementById('list');

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        createNewTodo(todo);
    });
}

addBtn.addEventListener('click', () => {
    if(inputEl.value) {
        createNewTodo(inputEl.value);
        updateLS();
    };
});

function createNewTodo(text) {    
    const todoEl = document.createElement("li");
    
    todoEl.innerHTML = `
        <span class="text">${text}</span><i id="delete" class="fas fa-trash-alt"></i>
    `
    listEl.prepend(todoEl);

    inputEl.value = "";

    const deleteBtn = document.getElementById('delete');

    deleteBtn.addEventListener('click', () => {
        todoEl.remove();
        updateLS();
    });
}

function updateLS() {
    const todosText = document.querySelectorAll(".text");

    const todos = [];

    todosText.forEach((todo) => {
        todos.unshift(todo.innerText);
    });

    localStorage.setItem("todos", JSON.stringify(todos));
};