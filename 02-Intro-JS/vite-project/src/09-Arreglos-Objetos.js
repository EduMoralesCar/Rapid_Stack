// Arreglo de objetos: Películas
const peliculas = [
    {
        id: 1,
        titulo: 'Inception',
        director: 'Christopher Nolan',
        año: 2010,
        genero: 'Ciencia Ficción',
        calificacion: 8.8,
        actores: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
    },
    {
        id: 2,
        titulo: 'Interstellar',
        director: 'Christopher Nolan',
        año: 2014,
        genero: 'Aventura',
        calificacion: 8.6,
        actores: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
    },
    {
        id: 3,
        titulo: 'The Dark Knight',
        director: 'Christopher Nolan',
        año: 2008,
        genero: 'Acción',
        calificacion: 9.0,
        actores: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
    },
    {
        id: 4,
        titulo: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        año: 1994,
        genero: 'Crimen',
        calificacion: 8.9,
        actores: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    }
];

// Mostrar todas las películas en tabla
console.table(peliculas);

// Buscar películas por director
const peliculasNolan = peliculas.filter(p => p.director === 'Christopher Nolan');
console.log();
console.log('Películas de Christopher Nolan:\n', peliculasNolan);

// Mostrar los títulos de todas las películas
const titulos = peliculas.map(p => p.titulo);
console.log();
console.log();
console.log('Títulos de las películas:\n', titulos);
console.log();