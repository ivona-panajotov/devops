const express=require("express")

PORT=3000
HOST='0.0.0.0'

const app=express()

app.get('/',(req,res)=>{
    req.send("Working!!")
})

app.listen((PORT,HOST),()=>{
    console.log(`Port at ${PORT}`)
})