console.log("commencing test run")
/*
-start by use npm i express to install express
-run: npm i nodemon   for automatic rerun/redeploy after saving
-set nodemon as an independence of the project with:
-run with:npm run devStart   , **devStart is set in json
-
*/

//---     setting up     ---//
const express = require('express')//const for express
const app = express() //calling express

app.set('views', './views')//set the name of folder to look in
app.set ('view engine','ejs')//set the view engine


//---     static site     ---//
app.use(express.static("staticSite"))//calling to use a static site to easily access subsite


//---     Middleware    ---//
app.use(logger)//calling middleware that run while loading



//---     site request/respond    ---//
/*app.get('/',(req,re s) =>{//take request and respond//send data back to user,immediatly after access the site
    console.log("Here")
    //res.send("Hi")//send data back to user,after access the site
    //res.sendStatus(500)//send status string back to server for different situation
    //res.json({message:"Error"})//make message from json element 
    //res.download('Cta.jpg')//instantly download the file
    res.render('testSite',{text:"Ace"})//respond:rendering an ejs file  **need to have a view engine to display the page
})*/

//---     middleware inside res/req     ---//
app.get('/',logger,(req,res) =>{//take request and respond//send data back to user,immediatly after access the site
    console.log("Here")
    //res.send("Hi")//send data back to user,after access the site
    })

//---     parsing data     ---//



//---     Router/Routing     ---//    
app.get("/usersList",(req,res) =>{//run after accessing site localhost:1359/users
    console.log("here's the user list")
    res.send("here's the user list")
})
app.get("/usersList/new",(req,res) =>{//run after accessing site localhost:1359/users/new
    console.log("whats yer name,newbie")
    res.send("whats yer name,newbie")
})

//---     advance Router/Routing     ---//
//const for router
const userRouter = require("./Routers/user")
//calling router for user
app.use("/user",userRouter)


//---     middleware function     ---//
function logger(req,res,next){
    console.log(req.originalUrl)//print out current url 
    next()
}

//---     setting localhost channel     ---//
app.listen(1359)