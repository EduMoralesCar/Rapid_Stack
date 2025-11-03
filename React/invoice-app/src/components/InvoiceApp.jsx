import { getInvoice } from "../services/getInvoice";

const InvoiceApp = () => {

  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = address;

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-primary">Invoice App</h1>
        <h2 className="text-center text-warning">Ejemplo de Factura</h2>
        <ul className="list-unstyled text-center mt-4">
          <li>ID: {id}</li>
          <li>Nombre: {name}</li>
        </ul>
        <h3 className="text-center text-success">Datos del Cliente</h3>
        <ul className="list-unstyled text-center mt-4">
          <li>Nombre: {nameClient}, {lastName}</li>
          <li>Dirección: {street} {number}</li>
          <li>Ciudad: {city}, {country}</li>
        </ul>
        <h3 className="text-center text-success mt-4">Datos de la Empresa</h3>
        <ul className="list-unstyled text-center mt-4">
          <li>Nombre: {company.name}</li>
          <li>Número Fiscal: {company.fiscalNumber}</li>
          <li>Teléfono: {company.phone}</li>
          <li>Email: {company.email}</li>
        </ul>
        <h3 className="text-center text-success mt-4">Productos de la Factura</h3>
        <ul className="list-unstyled text-center mt-4">
          {items.map((item, index) => (
            <li key={index}>
              {item.product} - ${item.precio} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InvoiceApp;