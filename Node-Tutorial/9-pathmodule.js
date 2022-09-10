const path=require('path')

console.log(path.sep);

//joins pathss in arguements usign delimiter (sep)
const filePath=path.join(`1-intro.js`)
console.log(filePath);

// base file name without path
const base = path.basename(filePath)
console.log(base);

// absolute path resolution
const absolute=path.resolve(__dirname, `1-intro.js`)
console.log(absolute);