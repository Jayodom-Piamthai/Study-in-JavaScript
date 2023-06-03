const express = require('express')
const router = express.Router() //calling express with router

//this is for routing to /user of the page
router.get("/",(req,res) =>{//run after accessing site localhost:1359/users
    console.log("here's the user list")
    res.send("here's the user list")
})
router.get("/",(req,res) =>{//run after accessing site localhost:1359/users
    res.post("user spotted")
})
router.get("/new",(req,res) =>{//run after accessing site localhost:1359/users/new
    console.log("whats yer name,newbie")
    res.send("whats yer name,newbie")
})


////
////dynamic route - be sure to put it *AFTER* the static one////
////
/*router.get("/:num",(req,res) =>{//run after accessing site localhost:1359/users/new
    res.send(`number ${req.params.num}`)//respong with user number + id 
    
})
router.put("/:num",(req,res) =>{//run after accessing site localhost:1359/users/new
    res.send(`Updated number ${req.params.num}`)//respong with user number + id 
    
})
router.delete("/:num",(req,res) =>{//run after accessing site localhost:1359/users/new
    res.send(`deleted number ${req.params.num}`)//respong with user number + id 
    
})*/
//dynamic route ver.2
router
    .route("/:id")
    .get((req,res) =>{//run get
        console.log(req.iden)
        res.send(`get user# ${req.params.id}`)
    })
    
    .put((req,res) =>{//run put
        res.send(`updated user# ${req.params.id}`)
    })

    .delete((req,res) =>{//run delete
        res.send(`deleted user# ${req.params.id}`)
    })

//Middleware-run when the pagae is loading,run before dynamic no matter whre it is put
const user = [{name:"Ace"},{name:"jay"}]
router.param("id",(req,res,next,id)=>{
    console.log(id)
    req.iden =  user[id]
    next()//run the next thing(dynamic)-prevent page infinitely loading
})


module.exports = router