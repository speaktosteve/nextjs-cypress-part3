'use client'

import Image from 'next/image'
import { useProducts } from '../hooks/useProducts'

export const Products = () => {
    const { products, isLoading, isError, isLoadingTooSlow } = useProducts()

    return (
        <section>
            <h1 className="text-xl pb-4">Products</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong...</p>}
            {isLoadingTooSlow && <p>This is taking longer than expected...</p>}
            {products && products.length === 0 && <p>No products found</p>}
            <ul className="grid md:grid-cols-2">
                {products &&
                    products.map((product) => (
                        <li key={product.id} className="border rounded m-4 p-8">
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <p>{product.description}</p>
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={100}
                                height={100}
                            />
                        </li>
                    ))}
            </ul>
        </section>
    )
}
