import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function ImgMediaCard({img, titulo, precio}) {
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
      <CardActions sx={{marginLeft:12}}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>+</Button>
            <Button>-</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

