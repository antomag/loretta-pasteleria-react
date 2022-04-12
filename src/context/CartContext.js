import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProductos, setCartProductos] = useState([])
   
    const addProductToCart = (producto) => {
        
        if(isInCart(producto.id)){
            const prod = cartProductos.find( cartProducto => cartProducto.id === producto.id )
            const { quantity } = prod
            prod.quantity = producto.quantity + quantity;
            const newCart = [...cartProductos]
            setCartProductos(newCart)
        }else{
            setCartProductos([...cartProductos, producto])
        } 
    } 

    const isInCart = (id) => {
        return cartProductos.some(producto => producto.id === id)
    }

    const deleteProducto = (producto) =>{
        setCartProductos(cartProductos.filter( cartProducto => cartProducto.id !== producto.id))
    }

    const clearCart = () => {
        setCartProductos([]) 
    }

    const data = {
        cartProductos,
        addProductToCart,
        deleteProducto,
        clearCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext