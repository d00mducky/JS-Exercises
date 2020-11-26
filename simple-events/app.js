const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
// select the bold tag within the H2 for showcasing the number of items dynamically
const todoNum = document.querySelector('.todo-num b');
const mainTitle = document.querySelector('.main-title');





// // all of the children of todoNum and only the children elements
// const items = todoList.children;

// // attach event listener
// button.addEventListener('click', function() {
//   // code of what we want to run when the button is clicked
//   console.log('thanks for clicking :)');
//   const newItem = document.createElement('li');
//   newItem.classList.add('item');
//   newItem.innerText = `item ${items.length + 1}`;

//   todoList.appendChild(newItem);
//   todoNum.innerText = items.length;
// });

button.addEventListener('click', function() {
  // adds the style in from our stylesheet
  // mainTitle.classList.add('spectacular');
  // adds or removes the style based off whether it already exists on the element
  mainTitle.classList.toggle('spectacular');


});