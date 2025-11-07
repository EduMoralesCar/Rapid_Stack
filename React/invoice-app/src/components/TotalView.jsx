
const TotalView = ({ title, total }) => {
    return (
        <>
            <div className="text-end">
                <h2 className="text-danger mt-4 fw-bold">{title}</h2>
                <span className="text-end fs-5 badge bg-success">Total: ${total.toFixed(2)}</span>
            </div>
        </>
    );
};

export default TotalView;