const { pseudoRandomBytes } = require('crypto')
const os=require('os')
// info about current user
const user = os.userInfo()
console.log(user)
//return system uptime
const uptime=os.uptime()
console.log(uptime)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMe:os.totalmem(),
    treeMem:os.freemem()
}
console.log(currentOS);