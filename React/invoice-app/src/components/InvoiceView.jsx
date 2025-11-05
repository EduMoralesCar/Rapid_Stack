
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

export default InvoiceView;