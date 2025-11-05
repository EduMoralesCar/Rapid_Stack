
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

export default CompanyView;