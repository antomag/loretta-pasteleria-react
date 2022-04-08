import { Divider } from '@mui/material';
import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import './CartPage.css'


export default function CartPage() {
    const { cartProductos } = useContext(CartContext)

   return(
        <div>
            <h1 className='tituloCarrito'>CARRITO DE COMPRAS</h1>
            {cartProductos.map( (cartProducto) => {
                    const { id, img, title, price} = cartProducto
                    return(
                        <div>
                            <Divider></Divider>
                            <div key={id} className="itemProducto">
                                <img src={`./${img}`} className="imagenCartPage"/> 
                                <p>{title}</p>
                                <span>${price}</span>
                            </div>
                        </div>
                    ) } ) 
                }
        </div>
    )
}






