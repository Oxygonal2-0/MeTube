import React from 'react';
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
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
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
                marginBottom : 8,
                marginLeft: 2,
                marginRight: 2,
            }}
            >

          <Typography component="h1" variant="h5" sx={{marginBottom: 3, fontWeight: 'bold'}}>
            Forgot Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Click me!"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Passord Reset Link
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <NavLink to="/" style={{fontSize: 14}}>Already have an account? Log In</NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    
    </div>
  )
}

export default ForgotPassword