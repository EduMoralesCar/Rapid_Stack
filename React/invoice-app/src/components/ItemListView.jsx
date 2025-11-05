import ItemRowView from "./ItemRowView";

const ItemListView = ({ title, items }) => {
    return (
        <>
            <h2 className="text-center text-success mt-4 fw-bold">{title}</h2>
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
                        <ItemRowView key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ItemListView;