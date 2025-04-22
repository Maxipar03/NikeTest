"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (item, quantity) => {
        let product = cart.find(itemCart => itemCart.id == item.id);

        if (product) {
            product.quantity += 1;
            setCart([...cart]);
        } else {
            product = {...item, quantity};
            setCart([...cart, product]);
        }

        console.log("Se agregó el Producto #" + item.id + "!");   
        console.log(cart)
    }

    const deleteProductFromCart = (id) => {
        let cartUpdated = cart.filter(item => item.id != id);
        setCart([...cartUpdated]);
        console.log("Se eliminó el Producto #" + id + "!");
    }

    const emptyCart = () => {
        setCart([]);
        console.log("Se vació el Carrito!");
    }

    return <CartContext.Provider value={{cart, addProductToCart, deleteProductFromCart, emptyCart}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider