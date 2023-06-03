console.log("commencing test run")
//run with:npm run devStart  **devStart is set in json

const express = require('express')//const for express
const app = express() //calling express

app.set('views', './views')//set the name of folder to look in
app.set ('view engine','ejs')//set the view engine


app.use(logger)//calling middleware

/*app.get('/',(req,re s) =>{//take request and respond//send data back to user,immediatly after access the site
    console.log("Here")
    //res.send("Hi")//send data back to user,after access the site
    //res.sendStatus(500)//send status string back to server for different situation
    //res.json({message:"Error"})//make message from json element 
    //res.download('Cta.jpg')//instantly download the file
    res.render('testSite',{text:"Ace"})//respond:rendering an ejs file  **need to have a view engine to display the page
})*/
app.get('/',logger,(req,res) =>{//take request and respond//send data back to user,immediatly after access the site
    console.log("Here")
    //res.send("Hi")//send data back to user,after access the site
    })


app.get("/usersList",(req,res) =>{//run after accessing site localhost:1359/users
    console.log("here's the user list")
    res.send("here's the user list")
})
app.get("/usersList/new",(req,res) =>{//run after accessing site localhost:1359/users/new
    console.log("whats yer name,newbie")
    res.send("whats yer name,newbie")
})

//const for router
const userRouter = require("./Routers/user")
//calling router for user
app.use("/user",userRouter)


//middleware function
function logger(req,res,next){
    console.log(req.originalUrl)//print out current url 
    next()
}


app.listen(1359)