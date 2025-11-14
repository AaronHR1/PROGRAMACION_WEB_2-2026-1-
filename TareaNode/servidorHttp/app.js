const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Este es un servidor HTTP de Node.js.');
});

server.listen(port, hostname, () => {
  console.log(`Servidor en http://${hostname}:${port}/`);
});