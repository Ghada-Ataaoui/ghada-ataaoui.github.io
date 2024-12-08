import Card from '@mui/material/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../OutlinedCardLeft/outlinedcardleft.css'
import portfolio_image from '../../assets/protoflio_image.jpg' 
import { Grid } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent >
        <img src={portfolio_image} className='portofolio_image' alt='portfolio_image'/>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Ghada Ataoui
        </Typography>
        <Button variant="outlined" sx={{borderColor:"gray" , color:"white" }}>Web Developer | AI enthusiast</Button>
        <hr></hr>
        <Grid container spacing={2} direction={'column'} >
          <Grid item >hello </Grid>
          <Grid item > hello</Grid>
        </Grid>
    </CardContent>
    
  </React.Fragment>
);

function OutlinedCardLeft() {
  return (
    <div className="OutlinedCard" >
        <Box sx={{ minWidth: 350 }} >
        <Card variant="outlined" sx={{ borderRadius:'20px', backgroundColor:"#1E1E1F"}}>{card}</Card>
        </Box>
    </div>
  );
}

export default OutlinedCardLeft;