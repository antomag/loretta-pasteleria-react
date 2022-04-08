import React, {useContext} from "react";
import './CardDetail.css'
import CardCount from '../CardCount/CardCount';
import { Container} from '@mui/material'
import CartContext from '../../context/CartContext'

export default function CardDetail({datos}){
    const {title, description, price, img, id} = datos
    const { addProductToCart } = useContext(CartContext)

    const onAdd = (contador) =>{
        addProductToCart(datos ,contador)
        console.log("add cart producto", datos)
        console.log("add cart cantidad", contador)
    }

    return(
        <div>
            <Container>
                    <div className="cardDetail">
                        <img src={img} alt="." className="imgCardDetail"/>
                        <div key={id} className="infoCard">
                            <h1>{title}</h1>
                            <h2>${price}</h2>
                            <p>DETALLE</p>
                            <p>{description}</p>
                            <br></br>
                            <CardCount stock={5} initial={1} onAdd={onAdd} datos={datos} />
                        </div>
                    </div>
            </Container>
        </div>
    )
}
