// Relaciones de Objetos y Metodos
const boleta = {
    nombre: 'Banco de Crédito del Perú',
    direccion: 'Av. Arequipa 1234',
    telefono: '987654321',
    cliente: {
        nombre: 'Edu Morales',
        direccion: 'Av. Siempre Viva 742',
        telefono: '123456789',
    },
    date: new Date(),
    greeting: function() {
        return `Hola, ${this.cliente.nombre}. Gracias por elegir ${this.nombre}.`;
    }
}

// Ejemplo de uso
console.log(boleta.greeting());