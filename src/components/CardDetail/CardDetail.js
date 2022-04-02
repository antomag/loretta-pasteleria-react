import React, {useState} from "react";
import './CardDetail.css'
import CardCount from '../CardCount/CardCount';

export default function CardDetail({dataProduct}){
    const {title, description, price, img} = dataProduct
    
    //logica boton 
    const [changeButton, setChangeButton] = useState(true) //no tiene funcionalidad de momento
    const onAdd = (contador) => {
        console.log(`se agregaron ${contador} producto/s correctamente`)
        setChangeButton(false)
    }

    return(
        <div className="cardDetail">
            <img src={img} alt="." className="imgCardDetail"/>
            <div className="infoCard">
                <h1>{title}</h1>
                <h2>${price}</h2>
                <p>DETALLE</p>
                <p>{description}</p>
                <br></br>
                <CardCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}