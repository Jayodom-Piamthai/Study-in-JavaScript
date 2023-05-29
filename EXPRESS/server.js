console.log("commencing test run")
//run with:npm run devStart
const express = require('express')
const app = express() 

app.get('/',(req,res) =>{//take request and respond//send data back to user,after access the site
    console.log("Here")
    //res.send("Hi")//send data back to user,after access the site
    //res.sendStatus(500)//send status string back to server for different situation
    //res.json({message:"Error"})//make message from json element 
    res.download('Cta.jpg')
    res.download('server.js')
    res.render('test-template')
})

app.listen(1359)