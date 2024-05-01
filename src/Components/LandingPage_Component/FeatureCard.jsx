import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import {TextField} from '@mui/material';
import { useTheme } from '@emotion/react';
const FeatureCard = ({ }) => {
  const theme = useTheme()
  return (
    <Card sx={{ marginY:"5%",marginX:"20%",display:'flex',justifyContent:'center',border: 0.5,borderRadius:2,borderColor:theme.palette.text.button,boxShadow:'1px 1px 1px 1px grey' }}>
      <CardContent>

        <Typography gutterBottom variant="h3" sx={{fontWeight:"bold", color:theme.palette.secondary.main}}>
          FOR ANY QUERIES, CONTACT US
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Our team will get you soon.Please stay tuned.
        </Typography>
          <TextField
            label="Email"
            InputProps={{ style: {margin: '0' } }}
            
          />
         
      </CardContent>
     
    </Card>
  );
};

export default FeatureCard;
