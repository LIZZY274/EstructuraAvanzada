let frutas = ["manzana", "banana", "naranja"];
const numeros = [1, 2, 3, 4, 5];
//DECLARAR ARRAY 1

//////////////////////Acceder a elementos del array:
console.log(frutas[0]); // Imprime "manzana"
console.log(numeros[2]); // Imprime 3

///////////Modificar elementos del array:
frutas[1] = "pera"; // Cambia "banana" a "pera"
console.log(frutas); // Imprime ["manzana", "pera", "naranja"]

//////Añadir elementos al final del array
frutas.push("uva");
console.log(frutas); // Imprime ["manzana", "pera", "naranja", "uva"]

///Eliminar elementos del final del array:
frutas.pop();
console.log(frutas); // Imprime ["manzana", "pera", "naranja"]

////Recorrer un array con un bucle for:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  
  ////Recorrer un array con un bucle forEach:
  frutas.forEach(function(fruta) {
    console.log(fruta);
  });
  