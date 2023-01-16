import React from 'react'
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import AvatarLogo from '../images/meTube Logo.jpg';
import MovieLogo from '../images/movieImage.jpg';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const watch = () =>{
    navigate('/watch');
  }
  return (
    <div className='mainPage' style={{position: 'relative', marginTop: '66px'}}>
    <Grid container spacing={2}>
      <Grid item xs={3} onClick={watch}>
        <img src={MovieLogo} width="100%" height={180} />
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img src={MovieLogo} width="100%" height={170}/>
        <Grid container spacing={7} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <div className='movieTitle' style={{fontSize: 15, paddingBottom: 5}}>Pirates of the Caribbean: At World's End</div>
            <div className='movieViews'>396K views • a week ago</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Skeleton sx={{ bgcolor: '#8791a7' }} variant="rectangular" width='100%' height={170} />
        <Grid container spacing={3} sx={{paddingTop: 2, paddingBottom: 3}}>
          <Grid item xs={2}>
          <Avatar alt="Profile Photo" src={AvatarLogo} sx={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton sx={{ bgcolor: '#8791a7' }}/>
            <Skeleton sx={{ bgcolor: '#8791a7' }} width="60%" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    </div>
  )
}

export default MainPage