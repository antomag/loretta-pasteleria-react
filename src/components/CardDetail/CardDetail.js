import React, {useState, useContext} from "react";
import './CardDetail.css'
import CardCount from '../CardCount/CardCount';
import { Container , Button} from '@mui/material'
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext";

export default function CardDetail({datos}){
    const {title, description, price, img, quantity } = datos
    const [ contador, setContador ] = useState(1);
    const [ changeButton, setChangeButton ] = useState(true)
    const { addProductToCart } = useContext(CartContext)

    const addToCart = () => {
        addProductToCart(datos)
        setContador(quantity = contador +1)  //dato que tengo qe mostrar en el carrito
        console.log(`se agregaron ${contador} producto/s correctamente`)
        setChangeButton(false)
    }                         

    return(
        <Container>
            <div className="cardDetail">
                <img src={img} alt="." className="imgCardDetail"/>
                <div className="infoCard">
                    <h1>{title}</h1>
                    <h2>${price}</h2>
                    <p>DETALLE</p>
                    <p>{description}</p>
                    <br></br>
                    {changeButton ? (
                        <Button onClick={addToCart} datos={datos}>¡COMPRAR AHORA!</Button>
                    ) : (
                        <Button><Link to={`/cart`}>TERMINAR COMPRA</Link></Button>
                    ) }
                </div>
            </div>
        </Container>
    )
}

{/* <CardCount stock={5} initial={1} onAdd={onAdd} dataProduct={dataProduct}/> */}