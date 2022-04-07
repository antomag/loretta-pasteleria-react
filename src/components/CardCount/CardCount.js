import React, {useState, useContext} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';
import CartContext from '../../context/CartContext'

export default function CardCount({stock, initial, dataProduct}){
    const [ contador, setContador ] = useState(initial);
    const { addProductToCart } = useContext(CartContext)

    const addToCart = () => {
        addProductToCart(dataProduct)
        setContador(contador +1)  //dato que tengo qe mostrar en el carrito
        console.log(`se agregaron ${contador} producto/s correctamente`)
    }

    return(
        <CardActions>
            <div >
                <Button onClick={addToCart}>¡COMPRAR AHORA!</Button>
            </div>
            <br></br>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={() => contador > initial ? setContador(contador -1) : null}>-</Button>
                <Button>{contador}</Button>
                <Button onClick={() => contador < stock ? setContador(contador +1) : null}>+</Button>
            </ButtonGroup>
        </CardActions>
    )
}

