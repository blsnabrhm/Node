//const app=require('express')()

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    console.log('user hit the resource');
    res.status(200).send('Home Page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('about page')
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

app.listen(5002,()=>{
    console.log('listening on 5002');
})

