import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { Box, CardHeader, useTheme, Button } from '@mui/material';

const ReviewCard = ({ avatar, name, title, review, rating , index }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getTruncatedReview = () => {
    if (isExpanded || review.length <= 100) {
      return review;
    }
    return `${review.substring(0, 130)}...`;
  };

  return (
    <Card sx={{
      maxWidth: 300,
      pt: index === 1 ? 20 : 15,
      height: index === 1 ? 'auto' : 320,
      borderRadius: '18px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid',
      justifyContent: 'center',
      backgroundColor: '#000',
      my: index !== 1 && 'auto',
      boxShadow: '0 10px 12px rgba(0, 0, 0, 0.2)',
      mb:'5%'
    }}>
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent:'center',
            mx:1,
            border:1,
            my:1,
            backgroundColor:'#fff',
            borderRadius:'15px'

            }}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', mx:'auto'}}>
            <Avatar src={avatar} aria-label="avatar" sx={{ 
                position: 'relative', 
                zIndex: 1, 
                marginTop: '-25px', 
                border:10,
                borderColor:'#fff',
                height:70,
                width:70

            }} />

            </Box>

            <Box sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'center' }}>
                <Box>
                  <Typography sx={{textAlign:'center'}} variant="body1">
                   {name}
                  </Typography>
                </Box>
                <Box>
                <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
                {title}
                </Typography>
                </Box>
            </Box>

            <CardContent sx={{display: 'flex', justifyContent: 'center' ,paddingBottom:0 }}>
            <Typography variant="body2" sx={{fontSize:'10px' , textAlign:'justify'}} color="text.secondary">
                {getTruncatedReview()}
            </Typography>
            
            </CardContent>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <Button variant='text' onClick={toggleExpanded}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
            </Box> */}
            <Box sx={{ display: 'flex', justifyContent: 'center' , my:'3%' }}>
            <Rating name="read-only" size='small' value={rating} readOnly />
            </Box>
        </Box>
        
    </Card>
  );
};

export default ReviewCard;
