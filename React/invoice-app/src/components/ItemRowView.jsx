import PropTypes from 'prop-types';

const ItemRowView = ({ item }) => {
    return (
        <tr>
            <td>{item.product}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.quantity * item.price}</td>
        </tr>
    );
};

ItemRowView.propTypes = {
    item: PropTypes.shape({
        product: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        precio: PropTypes.number.isRequired
    }).isRequired
};

export default ItemRowView;