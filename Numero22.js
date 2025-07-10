const estudiantes=[];
const estudiantesTop=[];

let estudiantesCantidad=parseInt(prompt("Cuantos estudiantes desea registrar en la base de datos :"))
if(isNaN(estudiantesCantidad)){
    console.log("Por favor intentelo nuevamente con un numero valido")
}else{
for(i=0;i<estudiantesCantidad;i++){
    let nombreEstudiante=prompt("Digite su nombre acontinuacion:")
    let notaUno=parseFloat(prompt(`Digite la nota numero uno de ${nombreEstudiante}`))
    let notaDos=parseFloat(prompt(`Digite la nota numero dos de ${nombreEstudiante}`))
    let notaTres=parseFloat(prompt(`Digite la nota numero tres de ${nombreEstudiante}`))

    const objetoEstudiantes={
        nombre:nombreEstudiante,
        nota1:notaUno,
        nota2:notaDos,
        nota3:notaTres
    }

    estudiantes.push(objetoEstudiantes)
}

const promedioNotas=(nota1,nota2,nota3)=>(nota1+nota2+nota3)/3

for(let i=0;i<estudiantes.length;i++){
    const est=estudiantes[i]
    const funcionPromedio=promedioNotas(est.nota1,est.nota2,est.nota3).toFixed(2)
    const estudianteAprobacion=funcionPromedio>=3.5 ? 'Aprobo :)':'No aprobo'
    console.log(`${est.nombre} su promedio es ${funcionPromedio} y su resultado fue ${estudianteAprobacion}`)


 
    if(funcionPromedio>=4){
        let estudiantestopagg=est
       estudiantesTop.push(estudiantestopagg)
    }
}

console.log("Los estudiantes con un promedio mayor a cuatro son:")
for(i=0;i<estudiantesTop.length;i++){
    console.log(`${estudiantesTop[i].nombre}`)
}
}
