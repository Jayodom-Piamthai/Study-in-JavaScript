const body = document.querySelector("body")
const div = document.createElement("div") 
div.innerHTML = "<li>this is a part of a list</li>" //add element into HTML directly on HTML,easier than append,but less sucure for website
body.append(div)

const greet = document.querySelector("#sup")
//getting contribute name 
console.log(greet.getAttribute("id"))//logging id name of greet
//adding attribute
div.setAttribute("id","firstToCome")//set ID attribute of div to firstToCome
//removing attribute
body.removeAttribute("id")//remove id from HTML body (even though there wasnt any to begun with lmao)


//dataset
const span = document.querySelector("#firstSpan")
console.log(span.dataset)//logging dataset of the first span
console.log(span.dataset.purpose)//logging dataset named "purpose" of the first span
span.dataset.purpose = "save the world"//editing dataset's data


//class
body.classList.add("three")//add class"three"
console.log(body.classList)//logging all class in body

body.classList.remove("one")//remove class"one"
console.log(body.classList)//logging all class in body

body.classList.toggle("switch")//activate "switch" class if its not in list,deactivate if in list
console.log(body.classList)//logging all class in body

body.classList.toggle("switch",true)//activate "switch" class 
body.classList.toggle("switch",false)//deactivate "switch" class 
console.log(body.classList)//logging all class in body