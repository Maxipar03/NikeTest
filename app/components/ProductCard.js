"use client"
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"

const ProductCard = ({ item }) => {

    const { addProductToCart } = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const addProduct = () => {
        if (!selectedSize) {
            alert("Por favor seleccioná un talle");
            return;
        }

        addProductToCart({ ...item, selectedSize }, 1);
    }

    return (
        <div className="w-full max-w-s h-100 bg-white rounded-md shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border hover:border-gray-200 hover:bg-gray-50 group">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-full h-60 cursor-pointer">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 bg-white w-full flex gap-2 p-2 overflow-x-scroll opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {item.availableSizes.map((size, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    e.preventDefault();
                                    setSelectedSize(size);
                                }}
                                className={`text-xs px-2 py-1 border opacity-100 rounded-md ${selectedSize === size
                                        ? "bg-black text-white border-black"
                                        : "bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </Link>

            <div className="p-4 flex flex-col justify-between h-[calc(100%-15rem)]">
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
