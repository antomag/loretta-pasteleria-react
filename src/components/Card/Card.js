import React from "react";
import { Link } from 'react-router-dom';
//mui
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
//css
import './Card.css'

export default function ImgMediaCard({datos}) {
  const {title, price, img, id} = datos

  return (
    <Card sx={{ maxWidth: 350}}>
      <Link to={`/productos/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`/img/${img}`}
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
    </Card>
  );
}
