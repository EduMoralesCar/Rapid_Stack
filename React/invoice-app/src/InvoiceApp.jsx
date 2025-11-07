import React, { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ItemListView from "./components/ItemListView";
import TotalView from "./components/TotalView";
import FormItemsView from "./components/FormItemsView";

const InvoiceApp = () => {

  const { id, name, client, company, items: itemsInitial, total } = getInvoice();

  const [productValue, setProductValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);

  const [items] = useState(itemsInitial);

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

  const handleUpdate = (e) => {
    e.preventDefault();
    const index = items.findIndex(item => item.product === productValue);
    if (index !== -1) {
      items[index] = {
        product: productValue,
        price: parseFloat(priceValue),
        quantity: parseInt(quantityValue, 10)
      };
    } else {
      alert('Producto no encontrado para actualizar');
    }
    setProductValue('');
    setPriceValue(0);
    setQuantityValue(0);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const index = items.findIndex(item => item.product === productValue);
    if (index !== -1) {
      items.splice(index, 1);
    } else {
      alert('Producto no encontrado para eliminar');
    }
    setProductValue('');
    setPriceValue(0);
    setQuantityValue(0);
  };

  // Variable para controlar la visibilidad del formulario
  const [activeForm, setActiveForm] = useState(false);

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
            {/* Boton para Ocultar el Formulario de Control de Inventario */}
            <button className="btn btn-primary mb-3 fw-bold" onClick={() => setActiveForm(!activeForm)}>
              {activeForm ? 'Ocultar' : 'Mostrar'} Formulario
            </button>
            {!activeForm || <FormItemsView
              productValue={productValue}
              setProductValue={setProductValue}
              priceValue={priceValue}
              setPriceValue={setPriceValue}
              quantityValue={quantityValue}
              setQuantityValue={setQuantityValue}
              onAdd={handleSubmit}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;