export default function ProductStock({ product }) {
    return (
        <div>
            {product.inStock ? (
                <p>El producto esta en stock!</p>
            ) : (
                <p>No hay stock del producto!</p>
            )}
        </div>
    );
}
