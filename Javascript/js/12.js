"use strict"; // Corre JS en modo estructo
// Objetos

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze no te permite agregar o quitar propiedades al objeto .seal hace lo mismo PERO si permite modificar los valores de las propiedades que ya tiene el objeto

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);