let number = prompt("Enter raffles number")
let random = Math.floor(Math.random()*1000000)
//console.log(number)
//console.log(Math.floor(Math.random()*100))

//getting value
document.getElementById("random").innerHTML = random
document.getElementById("number").innerHTML = number

if (number == random){
    document.getElementById("result").innerHTML= "congrats!"
}
else{
    document.getElementById("result").innerHTML="lose,sucks to be ya m8"
}
