export const getProducts = async (): Promise<Response> => {
    return await fetch('https://fakestoreapi.com/products')
}
