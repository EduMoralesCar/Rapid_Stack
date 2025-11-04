export const invoice = [
    {
        id: 1,
        name: "Componentes de PC",
        client: {
            name: 'Juan Perez',
            lastName: 'Gomez',
            address: {
                country: 'Argentina',
                city: 'Buenos Aires',
                street: 'Calle Falsa 123',
                number: 4567
            }
        },
        company: {
            name: 'Technology Compusearch S.A.',
            fiscalNumber: '30-12345678-9',
            phone: '+54 11 1234-5678',
            email: 'technology@Compusearch.com'
        },
        items: [
            {
                product: 'CPU Intel i7',
                precio: 150.00,
                quantity: 2
            },
            {
                product: 'Monitor 24 pulgadas',
                precio: 300.00,
                quantity: 1
            },
            {
                product: 'Teclado mecánico',
                precio: 200.00,
                quantity: 1
            }
        ]
    }
];
