import { useEffect, useState } from "react";

import { getProducts } from "../utils/api";
import { IProduct } from "../types/product";


export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
            }
            catch (error: unknown) {
                console.error("Error fetching products", error);
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    return { products, isLoading, isError };
}