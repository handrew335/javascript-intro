// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.tables(meses);

/*
// Acceder a los valores de un arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// Conocer la extensión de un arreglo
console.log(meses.length);

// Recorrer arreglos, es como un for en otros lenguajes
numeros.forEach(function(numero))
{
    console.log(numero);
}
*/

// Agrega elementos al final del arreglo
numeros.push(60, 70, 80);
// Agrega elementos al inicio de un arreglo
numeros.unshift(-10, -20, -30);
// Elimina el ultimo elemento
meses.pop();
// Elimina el primer elemento
meses.shift();

// Rest Operator, agrega un elemento sin modificar el arreglo original
const nuevoArreglo = ['Junio', ...meses];
console.log(nuevoArreglo);
