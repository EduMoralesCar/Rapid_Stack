// Ejemplo de hacer el uso de funcion Arrow

const OperacionesMatematicas = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
}

// Insertamos los valores para la operacion
const resultados = {
    suma: OperacionesMatematicas.sumar(5, 10),
    resta: OperacionesMatematicas.restar(10, 5),
    multiplicacion: OperacionesMatematicas.multiplicar(5, 10),
    division: OperacionesMatematicas.dividir(10, 5)
};

// Funcion de Flecha para mostrar los resultados
const ResultadoOperaciones = (resultados) => {
    console.log('Resultados de las operaciones:');
    for (const [operacion, resultado] of Object.entries(resultados)) {
        console.log(`${operacion}: ${resultado}`);
    }
}



ResultadoOperaciones(resultados);