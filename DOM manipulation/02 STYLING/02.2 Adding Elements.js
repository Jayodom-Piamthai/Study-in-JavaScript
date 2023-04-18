//adding element

const ul = document.querySelector('ul');
const li = document.createElement('li');//constant to create 'li'

ul.append(li) //inside ul-activate newListMember
//modifying text inside an element
li.innerText = 'unexpected.....';//add text to the new li
li.textContent = 'unexpected.....electric boogaloo';//add text to the new li
//innerText will select text that is made shown by CSS while textContent select all even not shown

//modifying a class/attributes
const h2 = document.querySelector('h2');
h2.setAttribute('id','blank');//setting a 'blank' id attribute to h2-override old one
const p = document.querySelector('p');
p.removeAttribute('id');//delete any id attribute from first p

li.classList.add('blank')//add 'blank' attribute to created li - wont overide
li.classList.remove('blank')//revert back to normal