import { getInvoice } from "../services/getInvoice";

const InvoiceApp = () => {

  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = address;

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header text-center bg-primary">
            <h1 className="fw-bold text-white">Invoice App</h1>
          </div>
          <div className="card-body">
            <h2 className=" text-warning fw-bold">Ejemplo de Factura</h2>
            <ul className="list-group list-unstyled mt-4">
              <li className="list-group-item">ID: {id}</li>
              <li className="list-group-item">Nombre: {name}</li>
            </ul>
            <div className="row mt-4">

              <div className="col-6">
                <h2 className="text-center text-success mt-4 fw-bold">Datos del Cliente</h2>
                <ul className="list-group list-unstyled mt-4">
                  <li className="list-group-item active">{nameClient}, {lastName}</li>
                  <li className="list-group-item">{street} {number}</li>
                  <li className="list-group-item">{country} / {city}</li>
                </ul>
              </div>

              <div className="col-6">
                <h2 className="text-center text-success mt-4 fw-bold">Datos de la Empresa</h2>
                <ul className="list-group list-unstyled mt-4">
                  <li className="list-group-item active">{company.name}</li>
                  <li className="list-group-item">{company.phone}</li>
                  <li className="list-group-item">{company.email}</li>
                </ul>
              </div>
            </div>

            <h2 className="text-center text-success mt-4 fw-bold">Productos de la Factura</h2>
            <table className="table table-bordered container-center mt-4 text-center table-striped table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>{item.precio}</td>
                    <td>{item.quantity * item.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;