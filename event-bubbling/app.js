const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
// select the bold tag within the H2 for showcasing the number of items dynamically
const todoNum = document.querySelector('.todo-num b');
const mainTitle = document.querySelector('.main-title');
const nameInput = document.querySelector('.name-input');
// // all of the children of todoNum and only the children elements
const items = todoList.children;

// attach event listener
button.addEventListener('click', function(event) {
  // because, when submitted, form items will refresh the page, using this function we cant prevent this default functionality
  event.preventDefault();
  // code of what we want to run when the button is clicked
  console.log('thanks for clicking :)');
  // creating the element
  const newItem = document.createElement('li');
  // adding the class
  newItem.classList.add('item');
  // adding the text
  newItem.innerText = nameInput.value;
  // appending to the todoList
  todoList.appendChild(newItem);
  // set header to length of ul
  todoNum.innerText = items.length;
  // reset placeholder text in the form
  nameInput.value = '';
  // create the event listener
  newItem.addEventListener('click', deleteItem);

  console.log(nameInput);
});

// this will iterate through all of the items array and add an addEventListener
// BUT it will not work dynamically, i.e. for new elements added to the page
for (item of items) {
  item.addEventListener('click', deleteItem);
}

function deleteItem(event) {
  // when an event invokes a function, the first argument item passed in is the event itself
  console.log(event);
  // this forces the event listener here to take priority over other event listeners activated through this event
  event.stopPropagation();
  // this will remove the target element of the event from the DOM
  event.target.remove();
}

// NOTE: event bubbling occurs when multiple event listeners are activited from a single action
todoList.addEventListener('click', function() {
  todoList.classList.toggle('spectacular');
});