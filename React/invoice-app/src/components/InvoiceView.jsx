import PropTypes from 'prop-types';

const InvoiceView = ({ title, id, name }) => {
    return (
        <>
            <h2 className=" text-warning fw-bold">{title}</h2>
            <ul className="list-group list-unstyled mt-4">
                <li className="list-group-item">ID: {id}</li>
                <li className="list-group-item">Nombre: {name}</li>
            </ul>
        </>
    );

};

InvoiceView.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default InvoiceView;