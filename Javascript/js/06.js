// Objeto Math

let resultado;

resultado = Math.PI; // Es el 3.1416
resultado = Math.round(2.5); // Redondeo normal
resultado = Math.ceil(2.5); // Redondea SIEMPRE hacía arriba, por ejemplo 2.1 lo redondea a 3
resultado = Math.floor(2.1); // Redondea SIEMPRE hacia abajo, 2.9 lo redondea a 2
resultado = Math.sqrt(144); // Squareroot
resultado = Math.abs(-200); // Convierte de negativo a positivo
resultado = Math.min(3, 5, 1, 8, 2, 10); // Retorna el numero mas pequeño de un listado
resultado = Math.max(3, 5, 1, 8, 2, 10); // Retorna el numero mas grende de un listado
resultado = Math.random(); // Regresa un numero random
resultado = Math.floor(Math.random()*30); // Se pueden mezclar funciones y operadores para lograr diferentes cosas

console.log(resultado);