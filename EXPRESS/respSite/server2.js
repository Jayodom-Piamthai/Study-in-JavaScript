console.log("commencing test run")
//run with:npm run devStart  **devStart is set in json

const express = require('express')//const for express
const app = express() //calling express

app.set('views', './views')//set the name of folder to look in
app.set ('view engine','ejs')//set the view engine


app.use(logger)//calling middleware

app.get('/',(req,res) =>{//take request and respond//send data back to user,immediatly after access the site
    console.log("Here")
    res.send("Hi")//send data back to user,after access the site
    })

//middleware function
function logger(req,res,next){
    console.log(req.originalUrl)//print out current url 
    next()
}


app.listen(2947)