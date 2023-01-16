import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from "react-router-dom";
import { Alert } from '@mui/material';
import { useRegisterUserMutation } from '../services/userAuthAPI';

const Registration =  () => {
  
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  
  const navigate = useNavigate();// navigate('/dashboard')
  const [registerUser, {isLoading}] = useRegisterUserMutation();
  
  var handleRegistration = async  (e) =>
  {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
      mobile : data.get('mobile')
    }

    if (actualData.email && actualData.password && actualData.mobile) {
      // document.getElementById('registration-form').reset()
      console.log("HELLO")
      const res = await registerUser(actualData);
      console.log(res);
      console.log("END")
      // setError({ status: true, msg: "Registration Successful", type: 'success' })
      // navigate('/dashboard')
      
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }

  return (
    <div className='loginDiv' style={{ background: "linear-gradient(black, rgb(14 23 62), rgb(45 54 102))"}}>    
      <Container component="main" maxWidth="xs" className='shadow-sm' sx={{backgroundColor: 'white', borderRadius: '5px'}}>
        <CssBaseline />
            <Box
            sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom : 5,
                marginLeft: 2,
                marginRight: 2,
            }}
            >

          <Typography component="h1" variant="h5" sx={{marginBottom: 3, fontWeight: 'bold'}}>
            Sign Up
          </Typography>
          <Box component="form" id="registration-form" onSubmit={handleRegistration} noValidate sx={{ mt: 1, marginBottom: 3 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="phone"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <NavLink to="/" style={{fontSize: 14}}>Already have an account? Log In</NavLink>
              </Grid>
            </Grid>
          </Box>
          {error.status ? <Alert severity={error.type} sx={{width: "100%"}}>{error.msg}</Alert> : ''}
        </Box>
        
      </Container>
    
    </div>
  )
}

export default Registration