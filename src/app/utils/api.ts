import { IProduct } from "../types/product";

export const getProducts = async (): Promise<IProduct[]> => {
    return (await fetch('https://fakestoreapi.com/products')).json();
}
