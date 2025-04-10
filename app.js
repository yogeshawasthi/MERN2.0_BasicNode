const express = require('express')
const app = express()


//Alternative
//const app = require('express')



app.get("/",(req,res)=>{
    res.send("Hello World!");
})





app.listen(3000,()=>(
    console.log("Nodejs server has started at prot 3000")// start the node server at 3000 port
))