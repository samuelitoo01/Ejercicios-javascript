let nombreUsuario=prompt('Hola, aca podras ver tu IMC , digita acontinuacion tu nombre')
let pesoUsuario=parseFloat(prompt(`Hola , ${nombreUsuario} digita tu peso en KG`))
let estaturaUsuario=parseFloat(prompt('ahora digita tu altura en metros'))

let formulaIMC=pesoUsuario/(estaturaUsuario*estaturaUsuario)
let resultado;

switch(true){
    case formulaIMC<18.5:
        resultado=`${nombreUsuario}, estas bajo de peso `
        break;
    case formulaIMC>18.5 && formulaIMC<24.9:
        resultado=`${nombreUsuario}, estas normal de peso`
        break;
    case formulaIMC>25.0 && formulaIMC<29.9:
        resultado=`${nombreUsuario}, estas con sobrepeso`
        break;
    case formulaIMC>30.0 && formulaIMC<34.9:
        resultado=`${nombreUsuario}, tienes obesidad tipo I`
        break;
    case formulaIMC>35.0 && formulaIMC<39.9:
        resultado=`${nombreUsuario}, tienes obesidad tipo II`
        break;
    case formulaIMC>40.0:
        resultado=`${nombreUsuario} Tienes obesidad tipo III`
    default:
        resultado="Algo salio mal intentalo nuevamente"
}

console.log(resultado)