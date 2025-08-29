
const factura = {
    id: 10,
    nombre: 'Compras de Oficina',
    fecha: new Date(),
    cliente: {
        id: 1,
        nombre: 'Aldo',
        apellido: 'Omar',
        email: 'aldo.omar@example.com',
        edad: 30
    },
    items: [
        {
            id: 1,
            nombre: 'Silla',
            cantidad: 2,
            precio: 50
        },
        {
            id: 2,
            nombre: 'Escritorio',
            cantidad: 1,
            precio: 150
        },
        {
            id: 3,
            nombre: 'Lámpara',
            cantidad: 3,
            precio: 25
        }
    ],
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total += item.cantidad * item.precio;
        });
        return total;
    },
    greeting: function() {
        return `Hola, ${this.cliente.nombre} ${this.cliente.apellido}. Gracias por su compra.`;
    }
}

// mostramos los resultados de la factura
console.log();
console.log(factura);
console.log();
console.log('Total a pagar:', factura.total());
console.log();
console.log(factura.greeting());
console.log();

// Cambimos de variable y realizas la comprobación de igualdad
const factura2 = factura;
const resultado = factura === factura2;

console.table(factura2);

console.log();

console.log('Realizamos la comprobación de igualdad');

if (resultado) {
    console.log("Las facturas son iguales.");
} else {
    console.log("Las facturas son diferentes.");
}

console.log();
