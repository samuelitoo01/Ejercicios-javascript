let numeroUno=parseInt(prompt("Digita el numero uno"));
let numeroDos=parseInt(prompt("Digita el numero dos"));
let operacion=prompt("Por favor digite el signo de la operacion que desea realizar + - * /")

switch(operacion){
    case "+":
        resultado=numeroUno+numeroDos
        break;
    case "-":
        resultado=numeroUno-numeroDos
        break;
    case "*":
        resultado=numeroUno*numeroDos
        break;
    case "/":
        resultado=numeroDos!==0 ? numeroUno/numeroDos : "No es posible dividir entre cero";
        break;
    default:
        resultado="La operacion ingresada no es valida por favor intentalo nuevamente"

}

console.log("El resultado de la operacion es", resultado)