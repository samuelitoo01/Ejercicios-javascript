const productos=[]

let cantidadProductos=parseInt(prompt("Cuantos productos deseas agregar a la base de datos"))

for(i=0;i<cantidadProductos;i++){
    let productoUsuario=prompt("Digita el nombre del producto")
    let precioUsuario=parseFloat(prompt("Digita el precio del producto"))
    let categoriaUsuario=prompt("Digita la categoria del producto")


const producto={
    nombre:productoUsuario,
    precio:precioUsuario,
    categoria:categoriaUsuario
}

productos.push(producto)

}

for(i=0;i<productos.length;i++){
    const user=productos[i]
    console.log(`El nombre del producto es ${user.nombre} su precio es${user.precio} y su categoria es ${user.categoria}`)
}

