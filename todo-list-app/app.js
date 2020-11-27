// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


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
  newTodo.innerText = todoInput.value;
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
  // clear the input text
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === 'trash-btn') {
    // grab the whole list item
    const todo = item.parentElement;
    // then remove it from the DOM
    todo.remove();
  }

  if(item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}