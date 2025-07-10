let nombreUsuario=prompt("Digita tu nombre acontinuacion para continuar :")
let notaUno=parseFloat(prompt("Digita la nota numero uno"))
let notaDos=parseFloat(prompt("Digita la nota numero dos"))
let notaTres=parseFloat(prompt("Digita la nota numero tres"))


const promedioUsuario=(notaUno,notaDos,notaTres)=>((notaUno+notaDos+notaTres)/3).toFixed(2)

let promedio=promedioUsuario(notaUno,notaDos,notaTres)

console.log(`${nombreUsuario},el promedio obtenido fue ${promedio} , y es base a estos resultados esto es lo que obtuvistes:${promedio>=3 ? "Aprobaste":"No aprobaste"}`)