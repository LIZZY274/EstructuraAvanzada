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
  
  // Iterar sobre el arreglo e imprimir los datos de cada persona
  console.log("Datos de las personas:");
  
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
  }
  