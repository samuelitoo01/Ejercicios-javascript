// Array donde se guardarán todos los estudiantes
const estudiantes = [];

// Preguntamos cuántos estudiantes se van a registrar
const cantidad = parseInt(prompt("¿Cuántos estudiantes quieres registrar?"));

// Ciclo para capturar los datos de cada estudiante
for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Nombre del estudiante #${i + 1}`);
    const nota1 = parseFloat(prompt(`Nota 1 de ${nombre}`));
    const nota2 = parseFloat(prompt(`Nota 2 de ${nombre}`));
    const nota3 = parseFloat(prompt(`Nota 3 de ${nombre}`));

    // Creamos el objeto del estudiante
    const estudiante = {
        nombre: nombre,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3
    };

    // Agregamos el estudiante al array
    estudiantes.push(estudiante);
}

// Función para calcular el promedio
const calcularPromedio = (n1, n2, n3) => ((n1 + n2 + n3) / 3).toFixed(2);

// Mostramos el resultado final
console.log("📋 Resultados finales:");

for (let i = 0; i < estudiantes.length; i++) {
    const est = estudiantes[i];
    const promedio = calcularPromedio(est.nota1, est.nota2, est.nota3);
    const estado = parseFloat(promedio) >= 3 ? "✅ Aprobado" : "❌ No aprobado";

    console.log(`👤 ${est.nombre} - Promedio: ${promedio} - ${estado}`);
}
