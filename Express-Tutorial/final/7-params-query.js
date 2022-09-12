const app=require('express')()
const{products}=require('./data.js')
app.get('/',(req,res)=>{
    res.send(`<h1>Homepage</h1><a href=/api/products>products</a>`)
})

// getting required fields
app.get(`/api/products`,(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image, desc}=product
        return{id, name, image, desc}
    })
    res.json(newProducts)
})

//getting all values of required id (overkill method)
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct=products.find((product)=> product.id===1)
//     res.json(singleProduct)
// })

//getting all values of required id (route params)
app.get('/api/products/:Id',(req,res)=>{ //after colon is ytour choice, :chicken, :productId
    const {Id}=req.params;
    const singleProduct=products.find((product)=> product.id===Number(Id))
    if(!singleProduct){
        return res.status(404).send('<h1>Product does not exist</h1>')
    }
    return res.json(singleProduct)
})

app.get('/api/query',(req,res)=>{
    const {search, limit}=req.query
    let sortedProducts=[...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // res.status(200).send('no products')
       return  res.status(200).json({success:true,data:[]})
    }
    return res.status(200).json(sortedProducts)
})
app.listen(5002,()=>{
    console.log(`listening on 5002`);
})