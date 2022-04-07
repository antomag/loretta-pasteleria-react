import React, {useContext} from 'react'
import CartContext from '../../context/CartContext';

export default function Carrito() {
    const { cartProductos } = useContext(CartContext)


    return(
        <div>
            <h1>CARRITO</h1>
            {cartProductos.map( (cartProducto) => {
                return(
                    <div key={cartProducto.id}>
                        <img src={`./${cartProducto.img}`} /> 
                        <p>{cartProducto.title}</p>
                        <span>$ {cartProducto.price}</span>
                    </div>
                    
                ) } ) 
            }
        </div>
        
    )
}