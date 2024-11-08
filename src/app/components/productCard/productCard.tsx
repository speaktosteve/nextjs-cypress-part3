import Image from 'next/image'
import { IProduct } from '../../types/product'

export const ProductCard = ({ product }: { product: IProduct }) => {
    return (
        <li key={product.id} className="border rounded m-4 p-8 list-none">
            <h3 className="font-bold text-lg pb-3">{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <Image
                className="mt-3"
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
            />
        </li>
    )
}
