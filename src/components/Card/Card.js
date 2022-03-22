import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

export default function ImgMediaCard({img, titulo, precio}) {
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
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ {precio}
        </Typography>
      </CardContent>
      <CardActions sx={{marginLeft:6}}>
          <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      </CardActions>
    </Card>
  );
}

