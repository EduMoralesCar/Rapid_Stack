// Funciones de Fecha

const productos = {
    producto1: {
        nombre: 'Laptop',
        precio: 1200,
        categoria: 'Electronics',
        fecha: new Date()
    },
    producto2: {
        nombre: 'Smartphone',
        precio: 800,
        categoria: 'Electronics',
        fecha: new Date()
    }
}

// Mostramos la tabla de productos
console.table(productos);

// Definimos la función mostrarProducto
function mostrarProducto(producto) {
    return `Nombre: ${producto.nombre}\n
    Precio: $${producto.precio}\n
    Categoría: ${producto.categoria}\n
    Fecha: ${producto.fecha.toLocaleDateString()}\n`;
}

// Usamos una función anónima asignada a una constante
const mostrarProducto1 = function (producto) {
    return `Nombre: ${producto.nombre}\n
    Precio: $${producto.precio}\n
    Categoría: ${producto.categoria}\n
    Fecha: ${producto.fecha.toLocaleDateString()}\n`;
}

// Convertimos a una funcion de Flechas
const mostrarProducto2 = (producto) => {
    return `Nombre: ${producto.nombre}\n
    Precio: $${producto.precio}\n
    Categoría: ${producto.categoria}\n
    Fecha: ${producto.fecha.toLocaleDateString()}\n`;
}




// Imprimir detalles de los productos
console.log('Mostrar Producto con una funcion declarativa:');
console.log('Primer producto:');
console.log(mostrarProducto(productos.producto1));
console.log('Segundo producto:');
console.log(mostrarProducto(productos.producto2));
console.log('-----------------------------------\n');

console.log('Mostrar con una funcion constante:');
console.log('Primer producto:');
console.log(mostrarProducto1(productos.producto1));
console.log('Segundo producto:');
console.log(mostrarProducto1(productos.producto2));
console.log('-----------------------------------\n');

console.log('Mostrar con una funcion de flecha:');
console.log('Primer producto:');
console.log(mostrarProducto2(productos.producto1));
console.log('Segundo producto:');
console.log(mostrarProducto2(productos.producto2));
console.log('-----------------------------------\n');