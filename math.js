const Math={}; //declaro el objeto

function add(x1, x2){
    return x1+x2;
}

function substract(x1, x2){
    return x1-x2;
}

function multiply(x1, x2){
    return x1*x2;
}

function divide(x1, x2){
    if(x2==0){
        console.log("No se puede dividir entre 0");
    }else{
        return x1/x2;
    }
}

//agrego propiedades al objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;  //es la forma de exportar un objeto, funciones o variables de js
