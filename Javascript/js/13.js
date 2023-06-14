// Unir dos objetos

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);

/*El resultado que devuelve la consola es que al objeto producto se le agregaron los atributos del nuevoProducto por lo que ahora
tiene los atributos que tenía al inicio mas los atributos de nuevoProducto y el objeto nuevoProducto permaneció igual, 
no sufrió ningún cambio */