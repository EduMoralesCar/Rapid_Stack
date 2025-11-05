
const ItemRowView = ({ item }) => {
    return (
        <tr>
            <td>{item.product}</td>
            <td>{item.quantity}</td>
            <td>{item.precio}</td>
            <td>{item.quantity * item.precio}</td>
        </tr>
    );
};

export default ItemRowView;