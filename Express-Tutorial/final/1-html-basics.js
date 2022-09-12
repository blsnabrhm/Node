const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url
    //homepage
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write(`<h1>Home page</>`)
        res.end()    
    }
    // about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write(`<h1>about page</>`)
        res.end()
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'}) 
        res.write(`<h1>page not found</>`)
        res.end()
    }
})
server.listen(5002)
