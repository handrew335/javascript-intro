const nombre = 'Andrés';
const email = 'correo@correo.com';

// Concatenación
console.log("Nombre Cliente: " + nombre + " Email: " + email); // Para concatenar dos strings era común usar el signo de +

// Template Strings - String Literals
console.log(`Nombre Cliente: ${nombre} Email: ${email}`); // Esto es un Template String que concatena de manera mas sencilla

// Si revisamos ambos resultados en la consola vemos que son iguales pero es mejor acostumbrarse a usar el template strings