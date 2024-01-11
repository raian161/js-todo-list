//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('form')

//event listener
// todoButton.addEventListener("click", addTodo);
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteCheck);


//functions

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value.length === 0) return

    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    console.log(todoInput.value)


    // create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value = ''

    // check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i>checked</i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // check trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i>trash</i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appent to list
    todoList.appendChild(todoDiv);



}

function deleteCheck(e) {
    const item = (e.target);
    //delete
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}