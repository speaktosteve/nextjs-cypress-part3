import { getProducts } from '@/app/utils/api'
import { ProductCard } from '../productCard/productCard'
import { IProduct } from '@/app/types/product'

export const ProductsServer = async () => {
    const response = await getProducts()

    if (!response.ok) {
        return <p>Something went wrong...</p>
    }

    const products: IProduct[] = await response.json()
    return (
        <section>
            <h2 className="text-xl pb-4">Products (Server-Rendered)</h2>
            <ul>
                {products && products.length === 0 && <p>No products found</p>}
                <ul className="grid md:grid-cols-2">
                    {products &&
                        products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                </ul>
            </ul>
        </section>
    )
}
