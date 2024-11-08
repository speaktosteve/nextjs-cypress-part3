'use client'

import { useProducts } from '@/app/hooks/useProducts'
import { ProductCard } from '../productCard/productCard'

export const Products = () => {
    const { products, isLoading, isError, isLoadingTooSlow } = useProducts()

    return (
        <section>
            <h2 className="text-xl pb-4">Products</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong...</p>}
            {isLoadingTooSlow && <p>This is taking longer than expected...</p>}
            {products && products.length === 0 && <p>No products found</p>}
            <ul className="grid md:grid-cols-2">
                {products &&
                    products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </ul>
        </section>
    )
}
