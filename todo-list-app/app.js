// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click', addTodo);
// functions

function addTodo(event) {
  event.preventDefault();

  // create container div for todo's
  const todoDiv = document.createElement('div');
  // add the class
  todoDiv.classList.add('todo');

  // create a new todo list item
  const newTodo = document.createElement('li');
  // add the class
  newTodo.classList.add('todo-item');
  // add inner text to the list item
  newTodo.innerText = 'hey';
  // append to the div todo element
  todoDiv.appendChild(newTodo);

  // button to mark a completed todo item
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // button to mark a todo item to be deleted
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // append to the DOM
  todoList.appendChild(todoDiv);
}