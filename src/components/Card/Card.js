import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardCount from '../CardCount/CardCount';
import './Card.css'

export default function ImgMediaCard({datos}) {
  const {title, description, price, img} = datos
  const [changeButton, setChangeButton] = useState(true) //no tiene funcionalidad de momento
    
  const onAdd = (contador) => {
      console.log(`se agregaron ${contador} producto/s correctamente`)
      setChangeButton(false)
  }

  return (
    <Card sx={{ maxWidth: 300, margin:5 }}>
      <CardMedia
        component="img"
        image={img}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardCount stock={5} initial={1} onAdd={onAdd}/>
    </Card>
  );
}

