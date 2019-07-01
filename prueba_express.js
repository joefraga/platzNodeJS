const express = require('express');
const colors = require('colors');
const server = express();

server.get('/',function(req, res){
    res.send("<h1>Hola Mundo con Express y NodeJS<h1>");
    res.end();  
})
server.listen(3000, ()=> console.log("server on port 3000".red));

