const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
// select the bold tag within the H2 for showcasing the number of items dynamically
const todoNum = document.querySelector('.todo-num b');
const mainTitle = document.querySelector('.main-title');
// // all of the children of todoNum and only the children elements
const items = todoList.children;

// attach event listener
button.addEventListener('click', function() {
  // code of what we want to run when the button is clicked
  console.log('thanks for clicking :)');
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.innerText = `item ${items.length + 1}`;

  todoList.appendChild(newItem);
  todoNum.innerText = items.length;

  // create the event listener
  newItem.addEventListener('click', deleteItem)
});

// this will iterate through all of the items array and add an addEventListener
// BUT it will not work dynamically, i.e. for new elements added to the page
for (item of items) {
  item.addEventListener('click', deleteItem);
}

function deleteItem(event) {
  // when an event invokes a function, the first argument item passed in is the event itself
  console.log(event);
  // this will remove the target element of the event from the DOM
  event.target.remove();
}

