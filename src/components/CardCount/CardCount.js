import React, {useState, useContext} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CardCount.css'

export default function CardCount({stock, initial, datos}){
    const [ contador, setContador ] = useState(initial);
    const { addProductToCart } = useContext(CartContext)
    const [ changeButton, setChangeButton ] = useState(true)

    const addToCart = () => {
        addProductToCart(datos)
        setContador(contador +1)  //dato que tengo qe mostrar en el carrito
        console.log(`se agregaron ${contador} producto/s correctamente`)
        onAdd()
    }

    const onAdd = (count) =>{
        setChangeButton(false)
    }

    return(
        <CardActions>
            {changeButton ? (
                <div>
                    <div >
                        <Button className="estiloBoton" color="inherit" onClick={addToCart}>¡COMPRAR AHORA!</Button>
                    </div>
                        <br></br>
                    <ButtonGroup className="estiloBoton" color="inherit" variant="outlined" aria-label="outlined button group">
                        <Button onClick={() => contador > initial ? setContador(contador -1) : null}>-</Button>
                        <Button>{contador}</Button>
                        <Button onClick={() => contador < stock ? setContador(contador +1) : null}>+</Button>
                    </ButtonGroup>
                </div>
            ) : (
                <div>
                    <Button className="estiloBoton" color="inherit"><Link to={`/productos`}>SEGUIR COMPRANDO</Link></Button>
                    <Button className="estiloBoton" color="inherit"><Link to={`/cart`}>TERMINAR COMPRA</Link></Button>
                </div>
            ) }
        </CardActions>
    )
}