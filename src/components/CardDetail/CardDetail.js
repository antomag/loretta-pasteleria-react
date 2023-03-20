import React, {useContext, useEffect, useState} from "react";
//mui
import { Container, LinearProgress } from '@mui/material'
//css
import './CardDetail.css'
//components
import CardCount from '../CardCount/CardCount';
//context
import CartContext from '../../context/CartContext'


export default function CardDetail({datos}){
    const {title, description, price, img, id} = datos
    const { addProductToCart } = useContext(CartContext)
    const [ loading, setLoading ] = useState(true)

    const onAdd = (contador) =>{
        addProductToCart({...datos, quantity: contador})
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);

    return(
        <>
            {loading ? 
                (<div style={{margin:250}}><LinearProgress color="success"/></div>)
            :
                (<Container>
                    <div className="cardDetail">
                        <img src={`/img/${img}`} alt="." className="imgCardDetail"/>
                        <div key={id} className="infoCard">
                            <h1>{title}</h1>
                            <h2>${price}</h2>
                            <p style={{textDecorationLine:'underline'}}>DETALLE</p>
                            <p>{description}</p>
                            <br></br>
                            <CardCount stock={5} initial={1} onAdd={onAdd} datos={datos} />
                        </div>
                    </div>
                </Container>)
            }
        </>
    )
}
