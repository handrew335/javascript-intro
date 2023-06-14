// Objetos

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Esta es la forma anterior en que se realizaba
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

/*Usando destructuring se extrae el valor del objeto y se asigna a una variable en el mismo paso*/