import Link from 'next/link'

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between w-full">
            <h1>Site Header</h1>
            <nav className="flex gap-3">
                <Link href={'/'}>Products (client-rendered)</Link>
                <Link href={'/products-server'}>
                    Products (server-rendered)
                </Link>
            </nav>
        </header>
    )
}
