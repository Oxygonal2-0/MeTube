import React from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import AvatarLogo from '../images/meTube Logo.jpg';
import MovieLogo from '../images/movieImage.jpg';
import { useNavigate } from 'react-router-dom';
import WatchItem from './watchItem';

const WatchMain = () => {
  const navigate = useNavigate();
  const watch = () =>{
    navigate('/watch');
  }
  return (
    <div style={{position: 'relative', width: '100vw', marginTop: '66px', backgroundColor: '#f9f9f9'}}>
        <div className='watchMain' style={{paddingTop: '15px'}}>
            
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <video src="/film.mp4" controls autoPlay type="video/mp4" width="100%" height="auto">

                    </video>
                </Grid>
                <Grid item xs={4}>
                    <div width="100%">
                    <Grid container spacing={1}>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                        <WatchItem/>
                    </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default WatchMain