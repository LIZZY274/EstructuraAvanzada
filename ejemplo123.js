// Crear un objeto JavaScript
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Ejemploville"
  };
  
  // Convertir el objeto JavaScript a una cadena JSON
  const jsonTexto = JSON.stringify(persona);
  
  // Imprimir la cadena JSON
  console.log("Cadena JSON:", jsonTexto);
  
  // Convertir la cadena JSON de vuelta a un objeto JavaScript
  const objetoJS = JSON.parse(jsonTexto);
  
  // Acceder a las propiedades del objeto JavaScript
  console.log("Nombre:", objetoJS.nombre); // Imprime "Juan"
  console.log("Edad:", objetoJS.edad); // Imprime 30
  console.log("Ciudad:", objetoJS.ciudad); // Imprime "Ejemploville"
  