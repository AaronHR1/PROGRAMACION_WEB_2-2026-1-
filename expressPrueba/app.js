const http = require('http');

//definir un puerto de salida
const port = 3026;

// creacion del servidor
const server = http.createServer((req,res)=>{
    //establecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    //enviar  la respuesta 'Hola mundo'
    res.end('Hola mundo');

});


//escucha el ppuerto en especifico
server.listen(port,()=>{
    console.log(`Servidor en ejecucion en http:127.0.0.1:${port}`);
});