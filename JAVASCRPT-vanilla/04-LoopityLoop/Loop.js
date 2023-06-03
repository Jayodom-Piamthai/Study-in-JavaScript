for(var counter=0;counter < 3; counter++){
    console.log("the end is never the" + counter)
}
for(var counter=0;counter < 3; counter++){
    alert("the end is never the")
}


let qtt = prompt("items quantity")
let OVRprice = 0
for(var i=1 ; i <= qtt ; i++)
{
    let itemPrice = prompt(i+"th Item's price")
    OVRprice = OVRprice + parseInt(itemPrice)
    document.getElementById("FinalPrice").innerHTML = "total sum:" + OVRprice +"baht"
    document.getElementById("priceList").innerHTML += i+"th Item's price :" + itemPrice + "baht" + "<br>"

}
