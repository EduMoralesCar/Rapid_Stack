import ItemRowView from "./ItemRowView";
import PropTypes from 'prop-types';

const ItemListView = ({ title, items }) => {
    return (
        <>
            <h2 className="text-center text-success mt-4 fw-bold">{title}</h2>
            <table className="table table-bordered container-center mt-4 text-center table-striped table-hover">
                <thead>
                    <tr>
                        <th className="bg-secondary text-white">Producto</th>
                        <th className="bg-secondary text-white">Cantidad</th>
                        <th className="bg-secondary text-white">Precio Unitario</th>
                        <th className="bg-secondary text-white">Total</th>
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

ItemListView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            unitPrice: PropTypes.number.isRequired
        })
    ).isRequired
};

export default ItemListView;