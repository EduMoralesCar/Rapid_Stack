// Definimos objetos

const producto = {
    nombre: 'Laptop',
    precio: 1200,
    categoria: 'Electronics',
    fecha: new Date()
}

const cliente = {
    nombre: 'John Doe',
    email: 'johndoe@example.com',
    telefono: '123-456-7890',
    fechaRegistro: new Date()
}

const registroCompleto = {
    ...producto,
    ...cliente
}

console.table(producto);
console.table(cliente);

// Unificar dos Objetos
const registerUserProduct = {
    ...cliente,
    ...producto
}

console.log(registerUserProduct);