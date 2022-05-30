function evening(){//tis a function,for ye to pull it to a good use
    alert("Good evening,stranger")
}
evening() //just type the name of the function with (),nothing more,nothing less,and it will be use
console.log("exit")
function FarenToCel(far){
    let value = (far-32)*5/9
    return value.toFixed(2) + " C ํ";//set to only two decimals
}
function display(element , value)
{
    document.getElementById(element).innerHTML="<b>" + value + "</b>"
}
function CelToFaren(cel){
    let value = (cel*9/5)+32
    return value.toFixed(2) + " F ํ";//set to only two decimals
}
function displaycel(value){
    alert(FarenToCel(value))
}

function displayfaren(value){
    alert(CelToFaren(value))
}