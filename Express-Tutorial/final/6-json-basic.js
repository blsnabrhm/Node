const app=require('express')()
const{products}=require('./data.js')
app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(5002,()=>{
    console.log(`listening on 5002`);
})