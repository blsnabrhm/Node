const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`welcome to our homepage`)
    }
    if(req.url==='/about'){
        res.end(`here is our short history`)
    }
    res.write(`<h1>Oops!</h1><p>We cant seem to find the page you are looking for</p`)
})

server.listen(5002)