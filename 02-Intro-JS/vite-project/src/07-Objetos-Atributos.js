
const tienda = {
    nombre: 'Tienda de Ropa',
    direccion: 'Av. Principal 456',
    telefono: '987654321',
    productos: [
        { nombre: 'Camisa', precio: 29.99 },
        { nombre: 'Pantalón', precio: 49.99 },
        { nombre: 'Chaqueta', precio: 89.99 }
    ],
    mostrarProductos: function() {
        return this.productos.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');
    }
}

// Ejemplo de uso
console.table(tienda.productos);
console.log(tienda.mostrarProductos());

// reduce realiza una operación acumulativa sobre los elementos de un array
const precioTotal = tienda.productos.reduce((total, producto) => total + producto.precio, 0);

console.log();
console.log(`Precio total: $${precioTotal.toFixed(2)}`);
console.log(`Precio promedio: $${(precioTotal / tienda.productos.length).toFixed(2)}`);
console.log();