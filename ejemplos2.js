//El método shift() se utiliza para eliminar y
//devolver el primer elemento de un array en JavaScript
// Declarar un array con elementos
let frutas = ["manzana", "banana", "naranja", "uva"];

// Utilizar shift() para eliminar y obtener el primer elemento
const primeraFruta = frutas.shift();

// Imprimir el primer elemento y el array actualizado
console.log("Primera fruta:", primeraFruta);
console.log("Array de frutas actualizado:", frutas);


////////////////pushhhhhhhh
// Declarar un array vacío
let frutas = [];

// Agregar elementos al array usando push()
frutas.push("manzana");
frutas.push("banana");
frutas.push("naranja");

// Imprimir el array
console.log("Array de frutas:", frutas);

// Agregar más elementos al final del array
frutas.push("uva", "pera");

// Imprimir el array actualizado
console.log("Array de frutas actualizado:", frutas);


///unshift
// Declarar un array con algunos elementos
let frutas = ["banana", "naranja", "manzana"];

// Usar unshift() para agregar elementos al principio del array
frutas.unshift("uva", "pera");

// Imprimir el array actualizado
console.log("Array de frutas actualizado:", frutas);
