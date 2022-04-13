import React, {useContext, useEffect, useState} from "react";
import './CardDetail.css'
import CardCount from '../CardCount/CardCount';
import { Container } from '@mui/material'
import CartContext from '../../context/CartContext'
import LinearProgress from '@mui/material/LinearProgress';

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
        <div>
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
        </div>
    )
}
