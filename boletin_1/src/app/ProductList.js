function Product(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Precio: €{props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default function ProductList() {
    const products = [
        { name: "Producto 1", price: 10, description: "Esto es el producto 1" },
        { name: "Producto 2", price: 20, description: "Esto es el producto 2" },
        { name: "Producto 3", price: 30, description: "Esto es el producto 3" },
    ];

    return (
        <div>
            {products.map((product, index) => (
                <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
}
