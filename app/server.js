const express=require("express")

PORT=3000
HOST='0.0.0.0'

const app=express()

app.get('/',(req,res)=>{
    res.send("Working!!")
})

app.get('/health',(req,res)=>{
    res.send("Ok")
})

app.listen(PORT,HOST,()=>{
    console.log(`Port at ${PORT}`)
})