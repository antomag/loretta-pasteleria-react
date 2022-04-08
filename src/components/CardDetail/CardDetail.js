import React, {useState,useEffect, useContext} from "react";
import './CardDetail.css'
import CardCount from '../CardCount/CardCount';
import { Container} from '@mui/material'

export default function CardDetail({datos}){
    const {title, description, price, img} = datos

    /* const [loading, setLoading] = useState(true) */                  
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
                            <CardCount stock={5} initial={1} datos={datos} />
                        </div>
                    </div>
            </Container>
        </div>
    )
}
