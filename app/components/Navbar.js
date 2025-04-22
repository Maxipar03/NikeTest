import Link from "next/link"
import Logo from "./Logo"

const Navbar = async () => {

    const response = await fetch("http://localhost:3000/api/products/", { cache: "no-store" });
    const items = await response.json();

    const categories = [...new Set(items.map((item) => item.category))];

    return (
        <header className="h-15 flex items-center justify-between bg-white px-30">
            <div>
                <Logo />
            </div>
            <div className="flex gap-4">
                <div className="relative group">
                    <h2 className="cursor-pointer">Productos</h2>
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg z-10 rounded opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                        <ul className="py-2">
                            {categories.map((category, index) => (
                                <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <Link href={`/products/${category}`}>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link href={"/cart"}>
                    <h2>Carrito</h2>
                </Link>
                <h2>Nosotros</h2>
                <Link href={"/admin"}>
                <h2>Admin</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar