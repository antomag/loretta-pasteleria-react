import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProductos, setCartProductos] = useState([])

    //cuando selecciono el primer producto, me muestra el arreglo vacio! ERROR
    const addProductToCart = (producto, contador) => {
        setCartProductos(cartProductos => [...cartProductos, producto])
        console.log(`se agregaron ${contador} producto/s de ${producto.title} con exito.`)
        
        let existe = cartProductos.find( cartProducto => cartProducto.id === producto.id )
        if(existe){
            cartProductos.reduce((quantity, value)=>(quantity + (value.quantity * value.producto.price)), 0)
        }else{
            setCartProductos(cartProductos => [...cartProductos, producto])
        }
        
        
    } 

    const deleteProducto = (producto) =>{
        setCartProductos(cartProductos.filter( cartProducto => cartProducto.id !== producto.id))
        //elimina el producto que cumple la condicion
    }

    const clearCart = () => {
        setCartProductos([]) //vacia el carrito completo
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