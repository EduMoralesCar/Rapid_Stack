import { getInvoice } from "../services/getInvoice";
import InvoiceView from "./InvoiceView";
import ClientView from "./ClientView";
import CompanyView from "./CompanyView";
import ItemListView from "./ItemListView";

const InvoiceApp = () => {

  const { id, name, client, company, items } = getInvoice();
  

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header text-center bg-primary">
            <h1 className="fw-bold text-white">Invoice App</h1>
          </div>
          <div className="card-body">
            <InvoiceView title="Ejemplo de Factura" id={id} name={name} />

            <div className="row mt-4">
              <div className="col-6">
                <ClientView title="Datos del Cliente" client={client} />
              </div>
              <div className="col-6">
                <CompanyView title="Datos de la Empresa" company={company} />
              </div>
            </div>

            <ItemListView title="Productos de la Factura" items={items} />

          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;