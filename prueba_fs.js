
const fs=require("fs");
/*
fs.writeFile("./texto.txt", "linea uno", function(err){  //funcion de callback para que haga algo cuando termine de crear el archivo
    if(err){
        console.log(err);
    }
    console.log("Archivo creado");
});

console.log("siguiente linea de codigo"); //esta linea seguiria en la ejecucion asincrona mientras ejecuta la creacion anterior
*/

fs.readFile("./texto.txt",function(err, data){
    if(err){
        console.log(err);                
    }else{
        console.log(data.toString());
    }
});