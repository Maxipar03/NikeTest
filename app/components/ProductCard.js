"use client"
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
    const { addProductToCart } = useContext(CartContext)

    const addProduct = () => {
        addProductToCart(item, 1);
    }

    return (
        <div className="w-100 h-90 bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border hover:border-gray-200 hover:bg-gray-50">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-full h-48 cursor-pointer">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>

            <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                    <Link href={`/product/${item.id}`}>
                        <h2 className="text-xl font-semibold text-gray-800 cursor-pointer">
                            {item.name}
                        </h2>
                    </Link>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>
                    <button
                        onClick={addProduct}
                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
