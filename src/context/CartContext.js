import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProductos, setCartProductos] = useState([])

    const addProductToCart = (producto) => {
        isInCart()
        setCartProductos(cartProductos => [...cartProductos, producto])
        console.log("carrito", cartProductos)

        //arreglo sin objetos duplicados
        /* const cartSinDuplicados = [...new Set(cartProductos)]
        console.log("sin duplicados",cartSinDuplicados)*/
    } 

    const isInCart = (id) => {
        const existe = cartProductos.find((e) => e.id === id);
        console.log("Existe", existe)
    };


    const data = {
        cartProductos,
        addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext