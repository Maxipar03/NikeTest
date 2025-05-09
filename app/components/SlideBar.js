"use client"
import { useState } from "react";
import Link from "next/link";

const SlideBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-8 h-6 z-70 flex items-center justify-center cursor-pointer"
            >
                <span
                    className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 origin-top-left ${menuOpen ? "rotate-45 top-0" : "top-0"
                        }`}
                />
                <span
                    className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ${menuOpen ? "opacity-0" : "top-2.5"
                        }`}
                />
                <span
                    className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 origin-bottom-left ${menuOpen ? "-rotate-45 bottom-0" : "bottom-0"
                        }`}
                />
            </button>

            <nav
                className={`fixed top-0 right-0 h-full w-64 z-30 bg-white shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col gap-4 mt-20 ">
                    <Link href="/products" className="text-lg font-semibold hover:underline">
                        Products
                    </Link>
                    <Link href="/about" className="text-lg font-semibold hover:underline">
                        About Us
                    </Link>
                    <Link href="/cart" className="text-lg font-semibold hover:underline">
                        Cart
                    </Link>
                    <Link href="/contact" className="text-lg font-semibold hover:underline">
                        Contact
                    </Link>
                    <Link href="/admin" className="text-lg font-semibold hover:underline">
                        Admin
                    </Link>
                </div>
            </nav>

        </div >
    );
};

export default SlideBar;
