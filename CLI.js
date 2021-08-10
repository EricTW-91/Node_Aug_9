// No need to require 'process'
const os = require('os')

switch (process.argv[2]) {
    case '-arch':
        console.log(`Architecture: ${os.arch()}`)
        break
    case '-cpu':
        console.log(`CPU: ${os.cpus()[0].model}`)
        break
    case '-ram':
        console.log(`Ram: ${os.totalmem() / 1024 / 1024} MB`)
        break
    case '-hdd':
        console.log(`HDD: no idea`)
        break
    case '-hostname':
        console.log(`Hostname: ${os.hostname()}`)
        break
    case '-ip':
        console.log(`IP address: ${os.networkInterfaces().lo0[0].address}`)
        break
    default:
        console.log('Nothing happen')
        break
}

// console.log(os.networkInterfaces())