import React, {useState,useEffect, useContext} from "react";
import './CardDetail.css'
import CardCount from '../CardCount/CardCount';
import { Container} from '@mui/material'
import CartContext from "../../context/CartContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function CardDetail({datos}){
    const {title, description, price, img} = datos
    const [ contador, setContador ] = useState(1);
    const { addProductToCart } = useContext(CartContext)
    /* const [loading, setLoading] = useState(true) */

    const addToCart = () => {
        addProductToCart(datos)
        setContador(contador +1)  //dato que tengo qe mostrar en el carrito
        console.log(`se agregaron ${contador} producto/s correctamente`)
    }                         

   /*  useEffect(() => {
        setLoading(true)
        // cambiar a false
    }, ); */

    return(
        <div>
            <Container>
                    <div className="cardDetail">
                        <img src={img} alt="." className="imgCardDetail"/>
                        <div className="infoCard">
                            <h1>{title}</h1>
                            <h2>${price}</h2>
                            <p>DETALLE</p>
                            <p>{description}</p>
                            <br></br>
                            <CardCount stock={5} initial={1} onClick={addToCart} datos={datos} />
                        </div>
                    </div>
            </Container>
        </div>
    )
}

{/* <Button onClick={addToCart} datos={datos}>¡COMPRAR AHORA!</Button> */}
