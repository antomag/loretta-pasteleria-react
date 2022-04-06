import React from "react";
import {Card, CardContent, CardMedia, Typography, CardActionArea, Button } from '@mui/material';
import './Card.css'
import { Link } from 'react-router-dom';

export default function ImgMediaCard({datos}) {
  const {title, price, img, id} = datos

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
      <div>
        <Button>¡COMPRAR!</Button>
      </div>
    </Card>
  );
}
