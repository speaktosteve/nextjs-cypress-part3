import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
    return (await fetch('https://fakestoreapi.com/products')).json();
}
