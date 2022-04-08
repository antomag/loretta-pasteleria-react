import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProductos, setCartProductos] = useState([])

    const addProductToCart = (producto) => {
        let existe = cartProductos.find( cartProducto => cartProducto.id === producto.id )
        !existe && setCartProductos(cartProductos => [...cartProductos, producto])
    } 

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