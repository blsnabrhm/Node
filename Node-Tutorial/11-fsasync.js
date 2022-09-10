const {readFile,writeFile, read}=require('fs')

readFile(`./Node-Tutorial/content/first.txt`,'utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./Node-Tutorial/content/second.txt',`utf-8`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile(`./Node-Tutorial/content/result-async.txt`,
        `Here is the result: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        })   
    })
})