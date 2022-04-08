import { Divider } from '@mui/material';
import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import './CartPage.css'
import DeleteIcon from '@mui/icons-material/Delete';


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
                                <p>{title}</p>
                                <p>{quantity}</p>
                                <span>${price}</span>
                                <div className='item-cart-modal__action'>
                                    <button onClick={() => deleteProducto(cartProducto)}>
                                        <DeleteIcon/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) } ) 
                }
            <button onClick={clearCart}>VACIAR CARRITO</button>
        </div>
    )
}






