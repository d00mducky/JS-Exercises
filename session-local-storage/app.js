/*
local storage

the only thing we can pass into local storage are strings
localStorage.setItem('todo', 'save the cat');

session storage
session storage is deleted after the page is closed
sessionStorage.setItem('todoList', 'feed the cat');

localStorage must be cleared manually
localStorage.clear();



localStorage.setItem('todo', 'save the cat');
localStorage.setItem('user', 'kyle');

// this will overwrite the first value at the key 'user'
localStorage.setItem('user', 'ed');

// get stuff back
const user = localStorage.getItem('user');

*/

const todoList = ['feed the cat', 'wash', 'listen to music'];

// strings the object, array, etc.
localStorage.setItem('todos', JSON.stringify(todoList));

// retrieves and parses it back to its original form i.e. object, array, etc.
const retrieved = JSON.parse(localStorage.getItem('todos'));