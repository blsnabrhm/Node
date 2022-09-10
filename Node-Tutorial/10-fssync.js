const {readFileSync,writeFileSync, write}=require('fs')

const first = readFileSync('./Node-Tutorial/content/first.txt','utf-8')
const second = readFileSync('./Node-Tutorial/content/second.txt','utf-8')

console.log(first,second);

writeFileSync(`./Node-Tutorial/content/result-sync.txt`, `Here is the result: ${first}, ${second} `,{flag:`a`})