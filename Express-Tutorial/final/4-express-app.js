const express=require('express')
const app=express()
const path=require(`path`)

//setup static and middlewares
app.use(express.static('./navbar-app')) //static resources commonly in public folder

app.get(`/`,(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send(`resource not found`)
})


app.listen(5002,()=>{
    console.log('listening on 5002');
})

