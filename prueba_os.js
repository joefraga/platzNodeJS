const os=require("os");   //como no le damos path es que esta en las librerias de nodejs

console.log(os.platform());
console.log(os.release());
console.log("tiene una memoria libre de: " + (os.freemem()/1024/1024/1024) + " Giga bytes");
console.log("tiene una memoria total de: " + (os.totalmem()/1024/1024/1024) + " Giga bytes");



