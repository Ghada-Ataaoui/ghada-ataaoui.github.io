import React from 'react'
import OutlinedCardLeft from './Components/OutlinedCardLeft/OutlinedCardLeft';
import { Grid } from '@mui/material';
import OutlinedCardRight from './Components/OutlinedCardRight/OutlinedCardRight';

function Main() {
  return (
   
      <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={4} >
            <OutlinedCardLeft/>
          </Grid>
          <Grid item xs={12} md={8} >
            <OutlinedCardRight/>
          </Grid>
          
      </Grid>
  )
}

export default Main