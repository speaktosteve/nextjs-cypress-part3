import { useEffect, useState } from "react";
import { getProducts } from "../utils/api";
import { IProduct } from "../types/product";

export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoadingTooSlow, setIsLoadingTooSlow] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const slowLoadingTolerance = 5000; // 5 seconds

    useEffect(() => {
        const fetchProducts = async () => {
            const slowLoadingTimer = setTimeout(() => {
                setIsLoadingTooSlow(true);
            }, slowLoadingTolerance); // 5 seconds delay

            try {
                const products = await getProducts();
                setProducts(products);
            }
            catch (error: unknown) {
                console.error("Error fetching products", error);
                setIsError(true);
            } finally {
                clearTimeout(slowLoadingTimer); // clear timer if fetch completes
                setIsLoading(false);
                setIsLoadingTooSlow(false); // Reset to false when response arrives
            }
        };

        fetchProducts();
    }, []);

    return { products, isLoading, isLoadingTooSlow, isError };
};
