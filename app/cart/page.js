"use client";
import { useContext } from "react"
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext"
import Image from "next/image";


const Carrito = () => {
    const { cart, emptyCart, deleteProductFromCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const router = useRouter();

    const goHome = () => {
        router.replace("/");
    };

    console.log(cart)

    return (
        <>
        <div className="container mx-auto my-16 px-4">
            {cart.length === 0 ? (
                <div className="flex flex-col items-center gap-5">
                    <p className="text-center text-white text-4xl">El carrito está vacío.</p>
                    <button onClick={goHome} className="mt-4 sm:mt-0 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 cursor-pointer aling-center">
                        Ir atras
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="col-span-2 grid gap-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden p-4">
                                <div className="w-full sm:w-32 h-32 relative mb-4 sm:mb-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col justify-between sm:ml-6 flex-1">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{item.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-gray-700 dark:text-gray-300">Cantidad: <strong>{item.quantity}</strong></span>
                                        <span className="text-gray-700 dark:text-gray-300">Talle: <strong>{item.selectedSize}</strong></span>
                                        <div className="flex gap-2 items-center">
                                            <h1 onClick={() => { deleteProductFromCart(item.id) }} className="bg-black rounded-md cursor-pointer p-2">🗑️</h1>
                                            <span className="text-lg font-bold text-gray-900 dark:text-white">${item.price * item.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-1 flex flex-col gap-4 h-fit bg-black p-2 rounded-md">
                        <div>                            
                        <h3 className="text-1xl font-bold text-gray-900 dark:text-white">Shipping: $0</h3>
                        <h3 className="text-1xl font-bold text-gray-900 dark:text-white">Tax: ${total.toFixed(2)}</h3>
                        <h3 className="pt-2 mt-2 border-t border-white text-2xl font-bold text-gray-900 dark:text-white">Total: ${total.toFixed(2)}</h3>
                        </div>
                        <div className="flex gap-5 w-full">
                            <button onClick={() => { emptyCart() }} className="mt-4 sm:mt-0 border-1 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
                                Vaciar Carrito
                            </button>
                            <button className="mt-4 sm:mt-0 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default Carrito;