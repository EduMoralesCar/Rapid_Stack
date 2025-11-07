
const FormItemsView = ({
  productValue,
  setProductValue,
  priceValue,
  setPriceValue,
  quantityValue,
  setQuantityValue,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="mt-4 my-3 card bg-light w-75 mx-auto">
      <h2 className="text-center text-warning fw-bold card-header bg-secondary p-4">Control de Inventario</h2>
      <form className="container mt-4" onSubmit={onAdd}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">Descripción*</label>
          <input
            type="text"
            className="form-control"
            id="product"
            placeholder="Ingrese el producto"
            value={productValue}
            onChange={(e) => setProductValue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label fw-bold">Cantidad*</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            placeholder="Ingrese la cantidad"
            value={quantityValue}
            onChange={(e) => setQuantityValue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="unitPrice" className="form-label fw-bold">Precio Unitario*</label>
          <input
            type="number"
            className="form-control"
            id="unitPrice"
            placeholder="Ingrese el precio unitario"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3 fw-bold" onClick={onAdd}>Agregar Producto</button>
        <button type="button" className="btn btn-warning mb-3 mx-2 fw-bold" onClick={onUpdate}>Actualizar Producto</button>
        <button type="button" className="btn btn-danger mb-3 mx-2 fw-bold" onClick={onDelete}>Eliminar Producto</button>
      </form>
    </div>
  );
};

export default FormItemsView;
