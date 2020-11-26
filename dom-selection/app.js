// grabs every element with the specified tag
const header = document.getElementsByTagName('h2');
// grabs all with specified class name
const list = document.getElementsByClassName('item');
// grabs single element with given ID
const button = document.getElementById('submit');



// NOTE -- query selector is a newer, better dom selection method
// to achieve the above :

/*
const header = document.querySelectorAll('h2');
const list = document.querySelectorAll('.item');
const button = document.querySelector('#submit');

NOTE: you can also use multiple selectors e.g. getting the h2 within the item class
const buttonHeader = document.querySelector('h2.item');

*/

console.log(header);
console.log(list);
console.log(button);