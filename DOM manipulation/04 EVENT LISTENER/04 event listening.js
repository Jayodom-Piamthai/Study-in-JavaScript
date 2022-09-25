//Event listener
//button event
const thisWayCome = document.querySelector("button");
function Wicked() {
    alert("something wicked this way comes ;)");
}
thisWayCome.addEventListener("click",Wicked)
//mouse hover event
const newBGcolor = document.querySelector("button");
function changeBGcolor(){
    newBGcolor.style.backgroundColor = "magenta"
}
newBGcolor.addEventListener("mouseover",changeBGcolor)