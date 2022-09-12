const http=require('http')
const {readFileSync}=require('fs')

const homePage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/styles.css')
const homeImages=readFileSync('./navbar-app/logo.svg')
const homeLogic=readFileSync('./navbar-app/browser-app.js')

const server=http.createServer((req,res)=>{
    const url=req.url
    //homepage
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write(homePage)
        res.end()    
    }
    // styles
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'}) 
        res.write(homeStyles)
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'}) 
        res.write(homeLogic)
        res.end()
    }
    //images
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'}) 
        res.write(homeImages)
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
