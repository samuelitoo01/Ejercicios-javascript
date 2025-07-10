let conversion=prompt("Digita la conversion que deseas hacer Centigrados(C) o fahrenheit(F)")
let gradosConversion=parseFloat(prompt(`Digita la cantidad de grados ${conversion} `))
let resultado;

if(conversion=="C" || conversion=="F"){
    if(conversion=="C"){
        resultado=(gradosConversion - 32) / 1.8;
    }else{
        resultado=gradosConversion * 1.8 + 32
    }
}else{
    alert("La opcion que seleccionaste no se encuentra en nuestro menu")
}

console.log(resultado)