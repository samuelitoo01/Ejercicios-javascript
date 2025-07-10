let cadenaTexto=prompt("Digita el texto")

function invertir(cadenaTexto){
invertida=cadenaTexto.split('').reverse().join('')
return invertida
}

console.log(invertir(cadenaTexto))

