import React, {useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ItemCount({stock, initial, onAdd}){
    const [ contador, setContador ] = useState(initial);

    const addToCart = () => {
        onAdd(contador)
    }

    return(
        <div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <button onClick={addToCart}>Agregar al carrito</button>
                <Button onClick={() => contador < stock ? setContador(contador +1) : null}>+</Button>
                <Button onClick={() => contador > initial ? setContador(contador -1) : null}>-</Button>
            </ButtonGroup>
            <p>Cantidad: {contador}</p>
        </div>
    )
}