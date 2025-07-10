edadUsuario=parseInt(prompt('Digite su edad para saber si es menor o mayor de edad '))

const mayorEdad=edadUsuario=>edadUsuario>=18 ? "mayor de edad":"menor de edad"

console.log(mayorEdad(edadUsuario))