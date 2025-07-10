let cadenaTexto=prompt("Digite la cadena de texto que quieres arreglar acontinuacion:")

const arreglarPalabra=cadenaTexto=>{
    let letraMayuscula=cadenaTexto[0].toUpperCase()
    let letrasMinuscula=cadenaTexto.slice(1).toLowerCase()
    return letraMayuscula +letrasMinuscula
}

console.log(arreglarPalabra(cadenaTexto))