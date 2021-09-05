const http = require('http');
const port = process.env.port || 8080;

const requestListner = function(req, res) {
    res.writeHead(200);
    res.end('Hello Gosia');
}

const server = http.createServer(requestListner);
server.listen(port);
  