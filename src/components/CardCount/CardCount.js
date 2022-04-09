import React, {useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom'
import './CardCount.css'

export default function CardCount({stock, initial, onAdd}){
    const [ contador, setContador ] = useState(initial);
    const [ changeButton, setChangeButton ] = useState(true)

    const addToCart = () => {
        onAdd(contador)
        setChangeButton(false)
    }

    return(
        <CardActions >
            {changeButton ? (
                <div>
                    <ButtonGroup className="estiloBoton" color="inherit" variant="outlined" aria-label="outlined button group">
                        <Button onClick={() => contador > initial ? setContador(contador -1) : null}>-</Button>
                        <Button>{contador}</Button>
                        <Button onClick={() => contador < stock ? setContador(contador +1) : null}>+</Button>
                    </ButtonGroup>
                    <br></br>
                    <Button className="estiloBoton" color="inherit" onClick={addToCart}>¡COMPRAR AHORA!</Button>
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