"use client";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";

const ProductDetail = ({ item }) => {

    const { addProductToCart } = useContext(CartContext);

    const [selectedSize, setSelectedSize] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const addProduct = () => {
        addProductToCart(item, quantity);
    }

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="w-full h-80 relative">
                <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>

            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">{item.name}</h1>
                    <p className="text-white text-sm mt-2">{item.category}</p>
                    <p className="text-white mt-4">{item.description}</p>
                    <div className=" flex flex-row w-full my-5 gap-2">
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

                <div className="mt-6 flex items-center justify-between border-t border-gray-600 pt-3">
                    <span className="text-2xl font-bold text-white">
                        ${item.price}
                    </span>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-500 rounded overflow-hidden">
                            <button
                                onClick={handleDecrease}
                                className="px-3 py-1 bg-gray-700 text-white hover:bg-gray-600"
                            >
                                −
                            </button>
                            <span className="px-4 text-white">{quantity}</span>
                            <button
                                onClick={handleIncrease}
                                className="px-3 py-1 bg-gray-700 text-white hover:bg-gray-600"
                            >
                                +
                            </button>
                        </div>

                        <button onClick={addProduct} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

