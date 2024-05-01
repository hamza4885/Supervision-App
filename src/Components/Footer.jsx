import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button} from '@mui/material';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
  const [email, setEmail] = React.useState('')
  const theme = useTheme()
  React.useEffect(()=>{
    
  },[])

  return (
  
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.button,
        p: 6,
        overflowX:'hidden'
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={4} >
            <Typography variant="h4" sx={{fontWeight:'bold',color: theme.palette.text.button}}  gutterBottom>
              Supervision App
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing the best service to our
              users.
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2} >
            <Typography variant="h5"sx={{fontWeight:'bold',color: theme.palette.text.button}} gutterBottom>
              Catogeries
            </Typography>
            
            <Link href="#"  sx={{color: theme.palette.text.button,textDecoration:'none'}}>
              <Typography sx={{marginTop:'7%',marginBottom:'5%',marginLeft:'3%' ,'&:hover': {
                color:theme.palette.text.button ,
              },}}>HomePage</Typography>
            </Link>
            <Link href="#"  sx={{color: theme.palette.text.button,textDecoration:'none' ,'&:hover': {
                color:theme.palette.text.button ,
              }}}>
              <Typography sx={{marginTop:'7%',marginBottom:'5%',marginLeft:'3%'}}>chat</Typography>
            </Link>
            <Link href="#"  sx={{color: theme.palette.text.button,textDecoration:'none' ,'&:hover': {
                color:theme.palette.text.button ,
              }}}>
              <Typography sx={{marginTop:'7%',marginBottom:'5%',marginLeft:'3%'}}>Profile</Typography>
            </Link>
           
            
          </Grid>
          <Grid item xs={4} sm={2} >
            <Typography variant="h5"sx={{fontWeight:'bold',color: theme.palette.text.button}} gutterBottom>
              Support
            </Typography>
            
            <Link href="#"  sx={{color: theme.palette.text.button,textDecoration:'none' ,'&:hover': {
                color:theme.palette.text.button ,
              }}}>
              <Typography sx={{marginTop:'7%',marginBottom:'5%',marginLeft:'3%'}}>Profile</Typography>
            </Link>
            <Link href="#"  sx={{color: theme.palette.text.button,textDecoration:'none' ,'&:hover': {
                color:theme.palette.text.button ,
              }}}>
              <Typography sx={{marginLeft:'3%'}}>Contact</Typography>
            </Link>
            
          </Grid>
          <Grid item xs={12} sm={4} >
                    <Box sx={{padding:'10%'}}>
            <Link href="https://www.facebook.com/"  sx={{color: theme.palette.text.button ,'&:hover': {
                color:theme.palette.text.button ,
              }}}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              
              sx={{ pl: 1, pr: 1 ,marginLeft:'8%' ,color: theme.palette.text.button ,'&:hover': {
                color:theme.palette.text.button ,
              }}}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" sx={{ pl: 1, pr: 1 ,marginLeft:'8%',
            color:theme.palette.text.button ,'&:hover': {
              color:theme.palette.text.button ,
            }}}>
              <Twitter />
            </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2"  align="center">
            {"Copyright @ "}
            <Link  href="#" sx={{color:theme.palette.text.button}}>
              Supervision APP
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    
  );
}