const http = require('http');
const port = process.env.port || 8080;

const requestListner = function(req, res) {
    res.writeHead(200);
    res.end('Kocham Poznań');
}

const server = http.createServer(requestListner);
server.listen(port);
  