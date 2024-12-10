import { useState } from "react";

export default function ShoppingList() {
    const [products, setProducts] = useState(["Manzana", "Banana", "Naranja"]);

    const removeProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    return (
        <div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product}
                        <button onClick={() => removeProduct(index)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
