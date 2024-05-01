import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import doodle from '../../assets/Main/doddle.jpg';
import { useTheme } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Login } from '../../Api/Auth/login';
import doodleXS from '../../assets/Main/doddlexs.jpg';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';

export default function SignIn() {
  const isSmallScreen = useMediaQuery('(max-width: 871px)');
  const isXSmallScreen = useMediaQuery('(max-width: 599px)');
  const [appname, setAppname] = useState('Supervision App');
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', success: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await Login(data.get('email'), data.get('password'));
      console.log(response);

      if (response.success) {
        // Redirect to "/"
        console.log(response.data.role)
        localStorage.setItem('User', JSON.stringify(response.data.role));
        localStorage.setItem("token", response.data.token)
        window.location.href = '/';
      } else {
        console.log(response.message)
        setAlert({
          show: true,
          message: response.message,
          success: false,
        });

        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlert({ show: false, message: '', success: false });
        }, 5000);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        backgroundColor: isXSmallScreen ? '#fff' : '#f3f4f6',
        height:'100vh'
      }}
    >

      <Grid item xs={12} sm={12} md={12} lg={12} square>
        <Box
          sx={{
            mx: 3,
            paddingX: { lg: '15%', xs: '5%' },
            paddingY: '1%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography sx={{ fontWeight: 'bolder', mt: { lg: 5, xs: 0 } }} variant="h5">
              Login
            </Typography>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit}
            sx={{
              mt: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TextField
              margin="normal"
              required
              
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{
                backgroundColor: '#fff',
                width:'50%'
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
            
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: '#fff', width:'50%'
              }}
            />

            <Button
              type="submit"
             

              sx={{
                width:'50%',
                mt: 3, mb: 2,
                backgroundColor: theme.palette.secondary.main,
                border: '1 solid #178582', borderRadius: 2,
                color: '#fff',
                "&:hover": {
                  color: '#000',
                  backgroundColor: '#0da39f'

                }
              }}
            >
              Log In
            </Button>
           
              <Box sx={{display:'flex',justifyContent:'center'}} >
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
        
            <Box sx={{ alignSelf: 'center', mt: '8%' }}>
              <Typography variant="body2" color="text.secondary"  >
                {`© ${appname}`},All rights Reserved

              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>





      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          display: alert.show ? 'block' : 'none',
        }}
      >
        <Paper
          sx={{
            backgroundColor: '#ff5050',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',

          }}>
            <PriorityHighOutlinedIcon color='#fff' />
            <Typography variant="body1"> {alert.message}
            </Typography>
          </Box>

        </Paper>
      </Box>
    </Grid>
  );
}