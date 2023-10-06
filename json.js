// Crear un objeto JSON
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Ejemploville",
    casado: false,
    amigos: ["María", "Pedro"],
    direccion: {
      calle: "123 Calle Principal",
      ciudad: "Ejemplolandia"
    }
  };
  
  // Convertir el objeto JSON a una cadena JSON
  const jsonTexto = JSON.stringify(persona);
  
  // Imprimir la cadena JSON
  console.log("Cadena JSON:", jsonTexto);
  
  // Convertir la cadena JSON de vuelta a un objeto JavaScript
  const objetoJS = JSON.parse(jsonTexto);
  
  // Acceder a las propiedades del objeto JavaScript
  console.log("Nombre:", objetoJS.nombre); // Imprime "Juan"
  console.log("Edad:", objetoJS.edad); // Imprime 30
  console.log("Ciudad:", objetoJS.ciudad); // Imprime "Ejemploville"
  console.log("Casado:", objetoJS.casado); // Imprime false
  console.log("Amigos:", objetoJS.amigos); // Imprime ["María", "Pedro"]
  console.log("Dirección:", objetoJS.direccion); // Imprime { calle: "123 Calle Principal", ciudad: "Ejemplolandia" }
  
  // Acceder a propiedades anidadas
  console.log("Calle:", objetoJS.direccion.calle); // Imprime "123 Calle Principal"
  console.log("Ciudad de la dirección:", objetoJS.direccion.ciudad); // Imprime "Ejemplolandia"
  