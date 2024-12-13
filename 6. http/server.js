// Creating nodejs server request and response

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
      res.write('<h1>Hello, Node.js</h>');
    }else if (req.url == '/about') {
      res.write('<h1>About Page!</h>')
    }
    res.end();
});

server.listen(5000);

console.log('The HTTP server is running on port 5000');
