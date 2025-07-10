let productos=[]

let productosCantidad=parseInt(prompt("Digite la cantidad de producto que desea registrar en nuestra bd"))

for(let i=0;i<productosCantidad;i++){
    let nombreProducto=prompt(`Digite el nombre del producto #${i+1}`)
    let precioProducto=parseFloat(prompt(`Digite el precio del producto #${i+1}`))
    let categoriaProducto=prompt(`Digite la categoria del producto #${i+1}`)

    const producto={
        nombre:nombreProducto,
        precio:precioProducto,
        categoria:categoriaProducto
    }

    productos.push(producto)
}

for(let i=0;i<productos.length;i++){
    pro=productos[i]
    console.log(`Nombre:${pro.nombre} precio:${pro.precio} y su precio es:${pro.precio}`)
}

let filtroCategoria=prompt("desea filtrarlos por categoria? categorias disponibles: belleza,peluqueria si o no ?")
const filtro=[];


    



