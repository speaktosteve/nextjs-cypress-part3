import Image from "next/image";
import { getProducts } from "../utils/api";

export const Products = async() => {
    const products = await getProducts();

    return (
        <section>
        <h1 className="text-xl pb-4">Products</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id} className="mb-4 border rounded p-4">
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.category}</p>   
                    <p>{product.description}</p>
                    <Image src={product.image} alt={product.title} width={100} height={100} />
                </li>
            ))}
        </ul>
        </section>
    );
}