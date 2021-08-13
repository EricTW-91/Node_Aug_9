const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
	fs.readFile('index.html', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		res.end(data);
    });
    
}).listen(port);
