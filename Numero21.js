const productosRegistrados=[]

productosCantidad=parseInt(prompt("Cuantos productos desea registrar , escribalo acontinuacion"))

for(let i=0;i<productosCantidad;i++){
    nombreProducto=prompt(`Digite el nombre del producto ${i+1}`)
    precioProducto=prompt(`Digite el precio del producto ${i+1}`)
    categoriaProducto=prompt(`Digite la categoria del producto ${i+1}`)

    const productos={
        nombre:nombreProducto,
        precio:precioProducto,
        categoria:categoriaProducto
    };

    productosRegistrados.push(productos)
    
};

console.log("Productos que tenemos registrados en nuestra base de datos ")

for(i=0;i<productosRegistrados.length;i++){
    const pro=productosRegistrados[i]
    console.log(`${pro.nombre} su categoria es ${pro.categoria} y su precio fue ${pro.precio}`)
}