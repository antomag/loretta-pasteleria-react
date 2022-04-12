import { Divider } from '@mui/material';
import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import './CartPage.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link } from 'react-router-dom'


export default function CartPage() {
    const { cartProductos, deleteProducto, clearCart } = useContext(CartContext)

   return(
        <div>
            <h1 className='tituloCarrito'>CARRITO DE COMPRAS</h1>
            {cartProductos.map( (cartProducto) => {
                    const { id, img, title, price, quantity} = cartProducto
                    return(
                        <div>
                            <Divider></Divider>
                            <div key={id} className="itemProducto">
                                <img src={`./${img}`} alt="imagen producto" className="imagenCartPage"/> 
                                <p><span>{title}</span></p>
                                <p>{quantity}</p>
                                <span>${price}</span>
                                <button style={{marginLeft:40}} onClick={() => deleteProducto(cartProducto)}>
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </div>
                    ) } ) 
                }
            <button onClick={clearCart}>VACIAR CARRITO</button>
            <button><Link to={`/productos`}>SEGUIR COMPRANDO</Link></button>
        </div>
    )
}






