import React, { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ItemListView from "./components/ItemListView";
import TotalView from "./components/TotalView";

const InvoiceApp = () => {

  const { id, name, client, company, items: itemsInitial, total } = getInvoice();

  const [productValue, setProductValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);

  const [items, setItems] = useState(itemsInitial);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      product: productValue,
      price: parseFloat(priceValue),
      quantity: parseInt(quantityValue, 10)
    };
    items.push(newItem);
    setProductValue('');
    setPriceValue(0);
    setQuantityValue(0);
  };

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
            <TotalView title="Total a Pagar" total={total} />

            {/* Formulario de ejemplo para agregar nuevos productos */}
            <div className="mt-4 my-3 card bg-light w-75 mx-auto">
              <h2 className="text-center text-warning fw-bold card-header bg-secondary p-4">Agregar Nuevo Producto</h2>
              <form className="container mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción</label>
                  <input type="text" className="form-control" id="product" placeholder="Ingrese el producto" value={productValue} onChange={(e) => setProductValue(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">Cantidad</label>
                  <input type="number" className="form-control" id="quantity" placeholder="Ingrese la cantidad" value={quantityValue} onChange={(e) => setQuantityValue(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="unitPrice" className="form-label">Precio Unitario</label>
                  <input type="number" className="form-control" id="unitPrice" placeholder="Ingrese el precio unitario" value={priceValue} onChange={(e) => setPriceValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Agregar Producto</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;