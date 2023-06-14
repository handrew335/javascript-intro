// Objetos

const nombreProducto = 'Monitor de 20 pulgadas';
const precio = 300;
const disponible = true;

// A continuación se muestra como se crea un objeto en Javascript
const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Cuando en la consola se manda a llamar al objeto producto devuelve los valores que están dentro de él
console.log(producto);

// Para acceder a un atributo del objeto usamos el objeto.propiedad

/*console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);*/

// Agregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';

// Eliminar propiedades de un objeto
delete producto.disponible;

console.log(producto);