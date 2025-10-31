// Objeto de Persona
const personas = {
  persona1: {
    nombre: 'Odon Pedro',
    apellido: 'Carlos Perez'
  },
  persona2: {
    nombre: 'Aldo Omar',
  apellido: 'Becerra Lopez'
  }
}

// Mostramos los objetos de persona
console.table(personas);


// Funcion de Saludo donde se recibe un objeto de persona
function Saludo(persona) {
  return `Bienvenido ${persona.nombre}, ${persona.apellido}\nUn Gusto conocerte y tenerte Aqui!!!\n`
}
console.log();
console.log('Realizando pruebas de la funcion Saludo:\n');
console.log(Saludo(personas.persona1));
console.log(Saludo(personas.persona2));