//adding element

const ul = document.querySelector('ul');
const li = document.createElement('li');//constant to create 'li'
ul.append(li) //inside ul-activate newListMember


//modifying text
li.innerText = 'unexpected.....';//add text to the new li


//modifying a class/attributes
const h2 = document.querySelector('h2');
h2.setAttribute('id','blank');//setting a 'blank' id attribute to h2-override old one
const p = document.querySelector('p');
p.removeAttribute('id');//delete any id attribute from first p

li.classList.add('blank')//add 'blank' attribut to created li-wont overide
li.classList.remove('blank')//revert back to normal