import { Divider } from '@mui/material';
import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import './CartPage.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link } from 'react-router-dom'


export default function CartPage() {
    const { cartProductos, deleteProducto, clearCart, calcularTotal } = useContext(CartContext)

   return(
        <div>
            <h1 className='tituloCarrito'>CARRITO DE COMPRAS</h1>
            {
                (cartProductos.length === 0)
                &&
                (<div>
                    <p>Aun no hay productos en el carrito... :(</p>
                    <button style={{margin:40}}><Link to={`/productos`}>INICIAR COMPRA</Link></button>
                </div>)
            }
            {
            cartProductos.map( (cartProducto) => {
                    const { id, img, title, price, quantity} = cartProducto
                    return(
                        <div>
                            <Divider></Divider>
                            <div key={id} className="itemProducto">
                                <img src={`./${img}`} alt="imagen producto" className="imagenCartPage"/> 
                                <p><span>{title}</span></p>
                                <p>Cantidad: {quantity}</p>
                                <span>Precio: ${price}</span>
                                <button style={{marginLeft:40}} onClick={() => deleteProducto(id)}>
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </div>
                ) } ) 
            }
            {
                (cartProductos.length >= 1)
                &&
                (<div> 
                    <h4>TOTAL DE LA COMPRA: $ {calcularTotal()}</h4>
                    <button onClick={clearCart}>VACIAR CARRITO</button>
                    <button><Link to={`/productos`}>SEGUIR COMPRANDO</Link></button>
                </div>)
            }   
            
        </div>
    )
}






