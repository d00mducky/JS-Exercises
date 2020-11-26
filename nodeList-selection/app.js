// when selecting items through these means (i.e. by class name or id), we can only retrieve by nodelist elements
const collectionItems = document.getElementsByClassName('item');
// when selecting items through query selector, we retrieve the nodelist as well as other items,
// like the text associated with nodelist elements, for example
const nodeItems = document.querySelectorAll('.item');
// this will retrieve the nodelist element associated with the given ID, along with anything contained within the element (e.g. comments, text, etc.)
const todoList = document.querySelector('#todo-list');
// you can specify how many elements you want to retrieve by using / not using the ALL at the end of querySelector
const todoNr = document.querySelector('.todo-num');

console.log(nodeItems);
// this will retrieve any child nodes of the given nodelist element, along with anything contained within the selector given above
console.log(nodeItems.childNodes);
// this will retrieve only the children elements of the given nodelist element, and not anything else within the container set up above
console.log(nodeItems.children);

/*
NOTE: you can iterate over either selector item :

  for (item of collectionItems) {
    ...
  }

  for(item of nodeItems) {
    ...
  }
*/

// NOTE: collectionItems as implemented above is a LIVE collection, meaning that it will actively update so long as the page is running
// i.e. if you added another element to what collectionItems is retrieving while the page is active, it will update this variable automagically

// NOTE: this is how we can create elements, specify their location, given text, class, id, etc.
const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'item 3';

// the element will not appear on the page until you append it to something
todoList.appendChild(newItem);

// NOTE: this item will NOT dynamically update, because querySelector items remain static, even when new elements or information is added dynamically
todoNr.innerText = nodeItems.length;