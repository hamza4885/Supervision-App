import { Button, Box, Typography, Grid } from '@mui/material'
import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = lazy(() => import('./Navbar'))
import { Card, CardContent, CardActions } from '@mui/material';
import Icon from '@mui/material/Icon';
import Toggle from 'react-toggle'
import { useThemeContext } from '../Theme';
import { getStats } from '../Api/Landing Page/Stats'
import { useTheme } from '@emotion/react'
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Backimage from '../../src/assets/Main/Backimage.jpg'
import frame1 from '../assets/Main/Frame1.png'
import frame2 from '../assets/Main/Frame2.png'
import frame3 from '../assets/Main/Frame3.jpg'
import FeatureCard from './LandingPage_Component/FeatureCard'
import SearchIcon from '@mui/icons-material/Search';
import { getTopReviews } from '../Api/Landing Page/TopReviews';
const ReviewCard = lazy(() => import('./LandingPage_Component/Testimonials'))
const Footer = lazy(() => import('./Footer'))
export default function LandingPage() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate()
  const [reviews, setReviews] = useState([])

  const features = [
    {
      icon: <SearchIcon fontSize='large' sx={{ color: 'white', fontSize: 40 }} />,
      title: 'Intuitive search functionality',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large' sx={{ color: 'white', fontSize: 40 }} />,
      title: 'Chat Integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large' sx={{ color: 'white', fontSize: 40 }} />,
      title: 'Intuitive search functionality',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large' sx={{ color: 'white', fontSize: 40 }} />,
      title: 'Chat Integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large' sx={{ color: 'white', fontSize: 40 }} />,
      title: 'Intuitive search functionality',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <SearchIcon fontSize='large' sx={{ color: 'white', fontSize: 40 }} />,
      title: 'Chat Integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  ];
  const getReviews = async () => {
    const res = await getTopReviews()
    console.log(res)
    setReviews(res)
  }
  const theme = useTheme()
  useEffect(() => {
    getReviews()

  }, [])
  return (
    <Suspense fallback={<div>loading Supervision App...</div>}>
      <Fragment>
        <Navbar />
        <Box sx={{ 
          backgroundColor: theme.palette.background.landingBG ,
           pb:'4%'}}>
          <Box sx={{ display: 'flex', 
          flexDirection: 'column', paddingTop: '7%',
           justifyContent: 'center' }}>

            <Typography sx={{
              fontWeight: 'bold', fontSize: '30px',
              display: 'flex', justifyContent: 'center',
              color: theme.palette.text.primary
            }}>
              TAKE KNOWLEDGE TO
            </Typography>
            <Typography sx={{
              fontWeight: 'bold', fontSize: '30px',
              marginLeft: '1%', display: 'flex', justifyContent: 'center',
              color: theme.palette.text.primary
            }}>
              THE NEXT LEVEL
            </Typography>
            <Typography sx={{
              fontSize: '10px', marginLeft: '1%',
              display: 'flex', justifyContent: 'center',
              color: theme.palette.text.primary
            }}>
              Lorem Ipsum is simply dummy
              text of the printing and typesetting industry
            </Typography>
            <Typography sx={{
              fontSize: '10px', marginLeft: '1%',
              display: 'flex', justifyContent: 'center',
              color: theme.palette.text.primary
            }}>
              Lorem Ipsum has been the industry.
            </Typography>
          </Box>


          <Box sx={{ display: "flex", justifyContent: 'center', paddingTop: '3%' }}>
            <Button sx={{
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.background.default,
              padding: '1% 2%',
              border: 1, borderRadius: 2
              , ':hover': {
                backgroundColor: theme.palette.background.default,
                color: theme.palette.secondary.main
              }
            }}
              onClick={() => navigate('')}
            >
              <AppleIcon sx={{ marginRight: "6px" }} />
              Download for IOS
            </Button>
            <Button sx={{
              marginLeft: '1%',
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.background.default,
              padding: '1% 2%',
              border: 1, borderRadius: 2
              , ':hover': {
                backgroundColor: theme.palette.background.default,
                color: theme.palette.secondary.main
              }
            }}
              onClick={() => navigate('')}
            >
              <AndroidIcon sx={{ marginRight: "6px" }} />
              Download for android
            </Button>
          </Box>


        </Box>
        <Box sx={{
          backgroundColor: '#000',
          pb: '2%'
        }}>

          <Box>
            <Typography sx={{
              fontWeight: 'bold', fontSize: '30px',
              display: 'flex', justifyContent: 'center',
              color: theme.palette.text.button,
              paddingY: '4%',

            }}>
              Key Features
            </Typography>
          </Box>
          <Grid container component="main" >

            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Card sx={{
                  maxWidth: 345, m: 2,
                  border: 1, borderRadius: 5,
                  backgroundColor: '#1d1e1f'
                }}>
                  <CardContent>
                    <Box sx={{
                      display: 'flex', justifyContent: 'flex-start',
                      border: 1, borderRadius: '50%', width: '25%',
                      backgroundColor: theme.palette.secondary.main,
                      borderColor: theme.palette.secondary.main,
                      padding: 2
                    }}>
                      {feature.icon}
                    </Box>
                    <Box sx={{ paddingY: '5%', marginY: '2%' }}>
                      <Typography gutterBottom variant="h5" component="div"
                        sx={{ color: theme.palette.text.button }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary"
                        sx={{ color: theme.palette.text.button }}>
                        {feature.description}
                      </Typography>

                    </Box>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', marginTop: "8%"
        }}>
          <Box>
            <Typography variant='h4'
              sx={{
                color: theme.palette.secondary.main,
                textAlign: 'center'
              }}>
              TESTIMONIALS
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6'
              sx={{
                color: '#000', textAlign: 'center',
                fontWeight: 700, my: '1%'
              }}>
              We are trusted by thousands of people
            </Typography>
          </Box>


        </Box>
        <Grid sx={{ flexGrow: 1, justifyContent: 'center' }} container spacing={2}>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                my: '2%',
                mx: 'auto',
              }}
              spacing={0.5}
            >
              {reviews.map((review, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}
                  sx={{
                    display: 'flex'
                  }}>
                  <ReviewCard
                    key={review._id}
                    avatar={<img src={review.user.image} alt={review.user.name} />}
                    name={review.user.name}
                    title="Student Review"
                    review={review.description}
                    rating={review.rating}
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img src={frame3} />

        </Box>


        <Footer />
      </Fragment>
    </Suspense>
  )
}