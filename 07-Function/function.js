function evening(){//tis a function,for ye to pull it to a good use
    alert("Good evening,stranger")
}
evening() //just type the name of the function with (),nothing more,nothing less,and it will be use
console.log("exit")
function FarenToCel(){
    let far = prompt("the farenheit:")
    let value = (far-32)*5/9
    return value.toFixed(2) + " F ํ";//set to only two decimals
}
function display(element , value)
{
    document.getElementById(element).innerHTML="<b>" + value + "</b>"
}
function CelToFaren(){
    let cel = prompt("the celcius:")
    let value = (cel+32)*9/5
    return value.toFixed(2) + " C ํ";//set to only two decimals
}
alert(FarenToCel(456))
display("FarenToCel",FarenToCel(456))
alert(CelToFaren(159))
display("CelToFaren",CelToFaren(159))