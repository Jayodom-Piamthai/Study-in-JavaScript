
const ul = document.querySelector('ul');

// parent node traversal
//show the one that were one layer above it
console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);//Two layers
console.log(ul.parentElement);

//child node traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = "orange";