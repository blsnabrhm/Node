const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(`welcome to our homepage`)
    }
    if(req.url==='/about'){
        return res.end(`here is our short history`)
    }
    return res.end(`<h1>Oops!</h1><p>We cant seem to find the page you are looking for</p>`)
})

server.listen(5002)