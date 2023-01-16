import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert } from '@mui/material';
import { NavLink } from "react-router-dom";

const Login = () => {
  // const [col, setCol] = useState({
  //   color: 'primary'
  // })
  
  const [focusName, setFocusName] = useState({
    name: "email",
  });

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  
  const navigate = useNavigate();
  
  var handleLogin = (e) =>
  {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
      tc : data.get('tc')
    }

    //Work on It
    if(actualData.tc === null)
    {
      setFocusName({name: "tc"});
      setError({ status: true, msg: "Please check the checkbox", type: 'error' })
      return;
    }
    
    if (actualData.email && actualData.password) {
      document.getElementById('login-form').reset()
      setError({ status: true, msg: "Registration Successful", type: 'success' })
      navigate('/dashboard')
      
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
            Log in
          </Typography>
          <Box component="form" id="login-form" onSubmit={handleLogin} noValidate sx={{ mt: 1 , marginBottom : 3,}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus= {focusName.name === "email" ? true : false}
                
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
              autoFocus= {focusName.name === "password" ? true : false}
            />
            <FormControlLabel
              control={<Checkbox value={true} name="tc" id="tc" autoFocus= {focusName.name === "tc" ? true : false} color='primary' />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/forgot-password" style={{fontSize: 14}}>Forgot password?</NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/registration" style={{fontSize: 14}}>Don't have an account? Sign Up</NavLink>
              </Grid>
            </Grid>
          </Box>
          {error.status ? <Alert severity={error.type} sx={{width: "100%"}}>{error.msg}</Alert> : ''}
        </Box>
        
      </Container>
    
    </div>
  )
}

export default Login