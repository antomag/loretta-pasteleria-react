import React, {useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';

export default function CardCount({stock, initial, onAdd}){
    const [ contador, setContador ] = useState(initial);

    const addToCart = () => {
        onAdd(contador)
    }

    return(
        <CardActions>
            <div >
                <button sx={{margin:5}} onClick={addToCart}>Agregar al carrito</button>
            </div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={() => contador < stock ? setContador(contador +1) : null}>+</Button>
                <Button>{contador}</Button>
                <Button onClick={() => contador > initial ? setContador(contador -1) : null}>-</Button>
            </ButtonGroup>
        </CardActions>
    )
}