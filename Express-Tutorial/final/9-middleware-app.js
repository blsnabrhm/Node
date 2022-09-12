const app=require('express')()
const logger=require('./logger')
const authorize=require('./authorize')

app.use([authorize,logger]) //middelware fucntion on top , middle order matters
app.get('/',(req,res)=>{
    res.send('home')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})


app.listen(5002,()=>{
    console.log('Listening on 5002');
})