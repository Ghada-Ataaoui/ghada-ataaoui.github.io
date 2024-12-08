import React from 'react'
import OutlinedCardLeft from './Components/OutlinedCardLeft/OutlinedCardLeft';
import { Grid } from '@mui/material';
import OutlinedCardRight from './Components/OutlinedCardRight/OutlinedCardRight';

function Main() {
  return (
    <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
          <OutlinedCardLeft></OutlinedCardLeft>
        </Grid>
        <Grid item xs={12} md={6}>
          <OutlinedCardRight></OutlinedCardRight>
        </Grid>
        
    </Grid>
  )
}

export default Main