const http = require('http');

const port = process.env.PORT || 3000

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    let json_data = {
        id: 1,
        name: 'Eric',
        email: 'email@gmail.com',
        phone: '393882899'
    }

    res.end(JSON.stringify(json_data))
    
}).listen(port);