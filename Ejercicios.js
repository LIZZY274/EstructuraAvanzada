//buscar en un arreglo json usando for
// Crear un arreglo de objetos JSON
const personas = [
    {
      nombre: "Juan",
      edad: 30,
      ciudad: "Ejemploville"
    },
    {
      nombre: "María",
      edad: 25,
      ciudad: "Ejemplolandia"
    },
    {
      nombre: "Pedro",
      edad: 35,
      ciudad: "Ejemplopolis"
    }
  ];
  
  // Nombre de la persona que deseas buscar
  const nombreABuscar = "María";
  
  // Variable para almacenar la persona encontrada (inicialmente null)
  let personaEncontrada = null;
  
  // Iterar sobre el arreglo para buscar la persona por nombre
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    if (persona.nombre === nombreABuscar) {
      personaEncontrada = persona;
      break; // Terminar el bucle cuando se encuentre la persona
    }
  }
  
  // Verificar si se encontró la persona y mostrar sus datos
  if (personaEncontrada) {
    console.log("Persona encontrada:", personaEncontrada);
  } else {
    console.log("Persona no encontrada.");
  }



// Crear una lista (array) de números
const numeros = [1, 2, 3, 4, 5];

// Imprimir la lista en la consola
console.log("Lista de números:", numeros);

  