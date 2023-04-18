//Event listener

//button event
const thisWayCome = document.querySelector("#bn");
function Wicked() {
    alert("something wicked this way comes ;)");
}

thisWayCome.addEventListener("click",Wicked)//alert with message after clicked


//mouse hover event
const newBGcolor = document.querySelector("#bn");
function changeBGcolor(){
    newBGcolor.style.backgroundColor = "magenta"
}

newBGcolor.addEventListener("mouseover",changeBGcolor)//change background to magenta after hovering cursor over

//--ALT--function event listener
newBGcolor.addEventListener("mouseleave", e =>{
    newBGcolor.style.backgroundColor = "white"
})

//bubbling and capture
//bubbling-activate from inner to outer
//cupture-activate from outer to inner
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")


parent.addEventListener("click",e =>{
    console.log("parent capture")
},{capture:true})
child.addEventListener("click",e =>{
    console.log("child capture")
    child.style.backgroundColor = "green"
},{capture:true})
parent.addEventListener("click",e =>{
    console.log("parent bubble")
}/*capture is defaulted to false*/)
child.addEventListener("click",e =>{
    console.log("child bubble")
})
