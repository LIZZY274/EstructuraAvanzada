function sumas(a, b) {
    return a + b;
}

let resultado = sumas(5, 3);
console.log("La suma es:", resultado);  


// let numero = [];
// for(let i = 1; i<=5; i++){
//     numero[i] = i;
// }

// console.log(numero);

// function esPar(numero) {
//     return numero % 2 === 0;
// }

// console.log(esPar(4));  
// console.log(esPar(7));  

// function sumaTodo(numero) {
//     if (numero < 1) {
//         return 0;
//     } else {
//         return numero + sumaTodo(numero - 1);
//     }
// }

// console.log(sumaTodo(10)); 

// function invertirCadena(cadena) {
//     const caracteres = cadena.split('');  
//     const cadenaInvertida = [];
  
//     for (let i = caracteres.length - 1; i >= 0; i--) {
//       cadenaInvertida.push(caracteres[i]);  
//     }
  
//     return cadenaInvertida.join('');  
//   }
  
//   const cadenaOriginal = 'Hola';
//   const cadenaInvertida = invertirCadena(cadenaOriginal);
//   console.log('Cadena original:', cadenaOriginal);
//   console.log('Cadena invertida:', cadenaInvertida);



// let estudiantes = [
//     { "nombre": "Juan", "edad": 25 },
//     { "nombre": "Maria", "edad": 22 },
//     { "nombre": "Carlos", "edad": 28 }
//   ];
  
//   function agregarStuende(nombre, edad) {
//     const nuevoEstudiante = { "nombre": nombre, "edad": edad };
//     estudiantes.unshift(nuevoEstudiante);
//   }
  

//   agregarStuende("Tagua", 21);
  
//   console.log(estudiantes);
  
  

  
  let estudiantes = [
    { "nombre": "Estudiante1", "edad": 20 },
    { "nombre": "Estudiante2", "edad": 21 },
    { "nombre": "Estudiante3", "edad": 22 }
  ];
  
  function sumarEdadesConPop(estudiantes) {
    let sumaEdades = 0;
  
    while (estudiantes.length > 0) {
      const estudiante = estudiantes.pop();
      sumaEdades += estudiante.edad;
    }
  
    return sumaEdades;
  }
  
  // Agregar un estudiante al inicio
//   agregarEstudianteAlInicio("EstudianteNuevo", 19);
  
  // Sumar las edades usando el método pop
  const sumaEdades = sumarEdadesConPop(estudiantes);
  
//   console.log("Estudiantes después de agregar:");
  console.log(estudiantes);
  console.log("Suma de edades de todos los estudiantes:", sumaEdades);
  