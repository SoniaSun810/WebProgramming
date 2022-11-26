
const os = require('os')
const { uptime } = require('process')

// info about current user
const user = os.userInfo()
console.log(user)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

// method returns the system uptime in second
console.log(`The System Uptime is ${os.uptime()} seconds`)