let round = prompt("feelin lucky? how many rounds ya wanna play?")
for(var i=1 ; i <= round ; i++){
    var answer = prompt("head or tail,what will it be?")
    var coinFlip = ""
    var flip =(Math.floor(Math.random ()* 42))
    var score = 0
    console.log(flip)
    if( flip <= 21)
        coinFlip = "head"
    else{
        coinFlip = "tail"
    }
    if (answer == coinFlip){
        alert(coinFlip + "! congrats,lucky-o")
        score = score +=1
    }
    else{
        alert(coinFlip + "! not so lucky eh?")
    }
    document.getElementById("result").innerHTML = i + "th round:" + coinFlip 
    document.getElementById("score").innerHTML = "final score:" + score
}