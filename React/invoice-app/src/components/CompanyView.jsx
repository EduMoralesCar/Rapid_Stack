import PropTypes from 'prop-types';

const CompanyView = ({ title, company }) => {

    return (
        <>
            <h2 className="text-center text-success mt-4 fw-bold">{title}</h2>
            <ul className="list-group list-unstyled mt-4">
                <li className="list-group-item active">{company.name}</li>
                <li className="list-group-item">{company.phone}</li>
                <li className="list-group-item">{company.email}</li>
            </ul>
        </>
    );
};

CompanyView.propTypes = {
    title: PropTypes.string.isRequired,
    // company: PropTypes.object.isRequired
    company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};

export default CompanyView;