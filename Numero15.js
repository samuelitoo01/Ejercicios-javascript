let numeroUsuario=parseInt(prompt("Hola digita el numero acontinuacion"))

//isnan true cuando no puede convertirse en un numero
let parImpar;
let multiploCinco;
let resultado;

if (isNaN(numeroUsuario)){
    resultado="El valor ingresado no es valido intentalo nuevamente"
}else{
    parImpar=numeroUsuario%2==0 ? "Este es un numero par":"Este es un numero impar";
    multiploCinco=numeroUsuario%5==0 ? "Este numero es multiplo de 5":"Este numero no es multiplo de cinco";
    resultado=parImpar+multiploCinco
}

console.log(resultado)