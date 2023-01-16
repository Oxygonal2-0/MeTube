import React from 'react'
import Grid from '@mui/material/Grid';
import MovieLogo from '../images/movieImage.jpg';

const WatchItem = () => {
  return (
    <>
        <Grid item xs={6}>
            <img alt="Profile Photo" src={MovieLogo} width="100%" style={{'borderRadius':'5px'}}/>
        </Grid>
        <Grid item xs={5}>
            <div className='movieTitle' style={{fontSize: 14, fontStyle: 'Roboto', paddingBottom: 5, color: '#030303'}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews' style={{color: '#606060'}}>396K views • a week ago</div>
        </Grid>
    </>
  );
}

export default WatchItem