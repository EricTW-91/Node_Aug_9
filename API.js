const os = require('os')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/api/arch', (req, res) => {
    const arch = {
        architecture: os.arch()
    }
    res.send(arch)
})
app.get('/api/cpus', (req, res) => {
    const cpus = {
        cpus: os.cpus()
    }
    res.send(cpus)
})
app.get('/api/ram', (req, res) => {
    const ram = {
        total: `${os.totalmem() / 1024 / 1024} MB`,
        free: `${os.freemem() / 1024 / 1024} MB`
    }
    res.send(ram)
})
app.get('/api/diskspace', (req, res) => {
    res.send('Can not find it!')
})
app.get('/api/hostname', (req, res) => {
    const hostname = {
        hostname: os.hostname()
    }
    res.send(hostname)
})
app.get('/api/ipaddress', (req, res) => {
    const ip = {
        address: os.networkInterfaces()
    }
    res.send(ip)
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))