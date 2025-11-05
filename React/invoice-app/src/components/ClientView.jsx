
const ClientView = ({ title, client }) => {

    const { name: nameClient, lastName, address } = client;
    const { country, city, street, number } = address;

    return (
        <>
            <h2 className="text-center text-success mt-4 fw-bold">{title}</h2>
            <ul className="list-group list-unstyled mt-4">
                <li className="list-group-item active">{nameClient}, {lastName}</li>
                <li className="list-group-item">{street} {number}</li>
                <li className="list-group-item">{country} / {city}</li>
            </ul>
        </>
    );
};

export default ClientView;