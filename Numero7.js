let cadenaTexto=prompt("Digita la cadena de texto que quieres repetir cierta cantidad de veces")
let numero=parseInt(prompt("Digita la cantidad de veces que quieres que la cadena se repita"))

const repetirCadena=(cadenaTexto,numero)=>cadenaTexto.repeat(numero)

console.log(repetirCadena(cadenaTexto,numero))

//repeat() repite una cadena cierta cantidad de veces 
