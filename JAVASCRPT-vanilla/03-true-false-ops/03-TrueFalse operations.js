//true-false operation
console.log(1 == 1)//true
console.log(1 == 2)//false
console.log(1 == "1")//true     , == does not give a single shits about data type,if its the same,its the same
console.log(3 == 6)//false

console.log(4 == "4")//true
console.log(4 === "4")//false    , same shit different type,=== count as false


console.log("4" != "4")//false   ,!= detect id its different
console.log("4" != 4)//false    
console.log("KoKoa" != "cocoa")//true ,different shits

console.log(15 !== "15")//true ,different type
console.log(18 !== 18)//false ,same shits
let age = prompt("your age please")
if (age == 69){
    alert("Nice")
    document.getElementById
    ("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/AB7tdlMmH6k\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" 
}
else if (age > 45 ){
    alert("welcome,king")
    document.getElementById
    ("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/AB7tdlMmH6k\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" 
}
else {
    alert("Fuck off,kiddos")
}