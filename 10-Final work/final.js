var TheName = prompt("hi,what's your name")
var Cause = prompt("what did i do to you?")
var IncDate = prompt("when did i do that to you?")

if (TheName.length == 0){
    var TheName = "Dipshit"
}
if (Cause.length == 0){
    var Cause = "f**kin do it to ya"
}
if (IncDate.length == 0){
    var IncDate = "that fateful day"
}

function Rhongler(){//THIS IS WHERE THE FUN BEGIN
    i=0
    o=0
    while (i < 69){
        if (i%3 == 0) 
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            o = o+1
        if (i%4 == 0) 
            window.open("https://www.youtube.com/watch?v=OLpeX4RRo28")
            o = o+1
        if (i%5 == 0) 
            window.open("https://youtu.be/0mHPrkhE_Tg")
            o = o+1
        console.log(i)
        i = i+1
    }
    document.getElementById("Faked").innerHTML = "<p>"+"lmao,im not sorry,not one bit. get pranked suckas" + "</p>" ;
    console.log(o)
}  
document.getElementById("TheName").innerHTML =  "look,["+ TheName + "],im sorry that i did that to you,im really,really sorry"
document.getElementById("CauseNDate").innerHTML = "yea,im sorry that i ["+ Cause +"] on ["+IncDate+"] "
