const http=require(`http`)
const {createReadStream}=require('fs')
const fileStream=createReadStream(`./content/big.txt`,'utf8')
http.createServer((req,res)=>{
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        return res.end(err)
    })
})
.listen(5002)
