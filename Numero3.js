let numero=parseInt((prompt("Digita un numero para saber si es par o impar")))

const parImpar=(numero)=>{
    if(numero%2==0){
        return "El numero es par"
    }
    else{
        return ('El numero es impar')
    }
}

console.log(parImpar(numero))