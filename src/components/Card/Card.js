import React, {useContext, useState} from "react";
import {Card, CardContent, CardMedia, Typography, CardActionArea, Button } from '@mui/material';
import './Card.css'
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";

export default function ImgMediaCard({datos}) {
  const {title, price, img, id} = datos
  const { addProductToCart } = useContext(CartContext)
  const [ contador, setContador ] = useState(1);
  
  const addToCart = () => {
    addProductToCart(datos)
    setContador(contador +1)  //dato que tengo qe mostrar en el carrito
    console.log(`se agregaron ${contador} producto/s de ${title} correctamente`)
  }

  return (
    <Card sx={{ maxWidth: 350}}>
      <Link to={`/productos/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="letraCard">
              {title} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            $ {price}
            </Typography>
            <br></br>
            <p className="verDetalleCard">Ver detalles</p>
          </CardContent>
        </CardActionArea>
      </Link>
      <div >
        <Button onClick={addToCart}>¡COMPRAR!</Button>
      </div>
    </Card>
  );
}
