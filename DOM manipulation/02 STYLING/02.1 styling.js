//selecting the element inside the page
const title = document.getElementById("Test");
const ul = document.querySelector('ul');
const li = document.querySelector('li');

//change the property of the selected one
title.style.color = "blue";
ul.style.fontFamily = "sans-serif"
ul.style.color = "red"
li.style.color = "green"


//logging
console.log(li.innerText)
console.log(li.innerHTML)
console.log(li.textContent)
