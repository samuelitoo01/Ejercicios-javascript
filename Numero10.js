let edadUsuario=parseInt(prompt("Digita la edad a continuacion"))
let NombreUsuario=prompt("Digita el nombre acontinuacion")

const saludoPersonalizado=(edadUsuario,NombreUsuario)=>{
    let saludo=`Hola ${NombreUsuario}, ${edadUsuario>=18? "eres mayor de edad":"eres menor de edad"}`
    return saludo
}

console.log(saludoPersonalizado(edadUsuario,NombreUsuario))