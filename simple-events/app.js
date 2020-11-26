const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNum = document.querySelector('#todo-num');
const items = todoList.children;


// attach event listener
button.addEventListener('click', function() {
  // code of what we want to run when the button is clicked
  console.log('thanks for clicking :)');
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.innerText = 'item 3';

  todoList.appendChild(newItem);
});

