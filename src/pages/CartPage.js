import { Container, Divider } from '@mui/material';
import React, {useContext, useState} from 'react'
import CartContext from '../context/CartContext';
import './CartPage.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link } from 'react-router-dom'
import ModalCustom from '../components/Modal/Modal';
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';

export default function CartPage() {
    const { cartProductos, deleteProducto, clearCart, calcularTotal } = useContext(CartContext)
    const [ openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProductos.map( (cartProducto) => {
                return{
                    id: cartProducto.id,
                    title: cartProducto.title,
                    price: cartProducto.price
                }
            }),
            date: new Date().toString(),
            total: calcularTotal(),
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }


   return(
        <Container>
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
                        <>
                            <Divider></Divider>
                            <div key={id} className="itemProducto">
                                <img src={`/img/${img}`} alt="imagen producto" className="imagenCartPage"/> 
                                <h3>{title}</h3>
                                <p>Cantidad: {quantity}</p>
                                <p>Precio: ${price}</p>
                                <button style={{marginLeft:40}} onClick={() => deleteProducto(id)}>
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </>
                ) } ) 
            }
            {
                (cartProductos.length >= 1)
                &&
                (<div> 
                    <div className='divTotalCompra'>
                        <h4>TOTAL DE LA COMPRA: $ {calcularTotal()}</h4>
                        <button className='confirmarCompra' onClick={()=>{setOpenModal(true)}}>CONFIRMAR COMPRA :)</button>
                    </div>
                    <div>
                        <button className='vaciar-seguir' onClick={clearCart}>VACIAR CARRITO</button>
                        <button className='vaciar-seguir'><Link to={`/productos`}>SEGUIR COMPRANDO</Link></button>
                    </div>
                </div>)
            }   
            <ModalCustom handleClose={() => {setOpenModal(false)} } open={openModal}>
                {
                    successOrder ?
                    (
                        <div style={{textAlign:'center', margin:40}}>
                            <h2>Orden generada correctamente!!</h2>
                            <p>Su numero de orden es: {successOrder}</p>
                            <button style={{margin:40}}><Link to='/' onClick={clearCart}>ACEPTAR</Link></button>
                        </div>
                    ) : (
                        <>
                            <h2 style={{textAlign:'center'}}>FORMULARIO</h2>
                            <form onSubmit={handleSubmit}>
                                <input className='inputForm' type="text" name='name' placeholder='Nombre' 
                                    onChange={handleChange} 
                                    value={formData.name}
                                />
                                <br></br>
                                <input className='inputForm' type="number" name='phone' placeholder='Telefono' 
                                    onChange={handleChange} 
                                    value={formData.phone}
                                />
                                <br></br>
                                <input className='inputForm' type="mail" name='email' placeholder='mail' 
                                    onChange={handleChange} 
                                    value={formData.email}
                                />
                                <br></br>
                                <button className='botonEnviar' type="submit">ENVIAR</button>
                            </form>
                        </> 
                    )
                }
            </ModalCustom>
        </Container>
    )
}






