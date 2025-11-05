import PropTypes from 'prop-types';

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

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    // client: PropTypes.object.isRequired
    client: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        address: PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            street: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    }).isRequired

};

export default ClientView;