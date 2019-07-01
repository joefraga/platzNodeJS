const http = require('http');
var colors = require('colors');

const handleServer = function(req,res){
    res.writeHead(200), {"content-type":"text:html"}; //mando el codigo de respuesta OK
    res.write("<h1>Hola mundo desde NodeJS</h1>");     //manda un mensaje en respuesta
    res.end(); //termina la respuesta
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log("Server on port 3000".green);
});