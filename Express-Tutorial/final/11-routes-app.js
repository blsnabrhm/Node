const express=require('express')
const app=express()
const people=requre(`./routes/people`)
const auth=requre(`./routes/auth`)

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

// routers
app.use('api/people',people)
app.use('/login',auth)


app.listen(5002,()=>{
    console.log('Listening on 5002');
})