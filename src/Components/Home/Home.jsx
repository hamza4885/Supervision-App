import { Box, Button, Grid, Typography } from '@mui/material'
import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { getTopTeachers } from '../../Api/Landing Page/TopTeachers'
import { getTopCourses } from '../../Api/Landing Page/TopCourses'
import { useTheme } from '@emotion/react'
const Sidebar = lazy(() => import('../Sidebar'))
const Navbar = lazy(() => import('./Components/Navbar'))
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    window.location.href = '/';
  }
  const [teachers, setTeachers] = useState(null)
  const [courses, setCourses] = useState(null)

  const theme = useTheme()

  const TopTeachers = async () => {
    const res = await getTopTeachers()
    setTeachers(res)
  }
  const TopCourses = async () => {
    const res = await getTopCourses()
    console.log("Top Courses ", res)
    setCourses(res)

  }
  useEffect(() => {
    TopTeachers()
    TopCourses()
    console.log(teachers)

  }, [])
  return (
    <Fragment>
      <Suspense fallback={<div>loading Supervision App...</div>}>
        <Box sx={{
          display: 'flex',
          backgroundColor: theme.palette.background.landingBG,
          overflow: 'hidden'
        }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            {teachers &&
              (
                <Box sx={{
                  display: 'flex',
                  mt: '5%',
                  ml: '5%'
                }}>
                  <Typography variant='h5'>
                    Top Supervisors
                  </Typography>
                </Box>
              )
            }
            <Grid container
              component="main"
              sx={{ ml: '5%', mt: '2%' }}>
              <Grid item xs={12} sm={6} md={4} lg={3} elevation={6} square>
                {teachers && teachers.map((teacher) => {
                  return (
                    <Box sx={{
                      backgroundColor: theme.palette.background.default,
                      padding: 1,
                      border: 1,
                      borderRadius: 5,
                      borderColor: theme.palette.background.default
                    }}
                      key={teacher._id}
                    >
                      <img src={teacher.user.image} alt={teacher.user.name}
                        style={{
                          width: 300,
                          height: 250,
                          border: 1,
                          borderRadius: 10
                        }}
                      />
                      <Typography
                        variant='h6'
                        sx={{
                          mt: 1
                        }}>
                        {teacher.user.name}
                      </Typography>
                    
                      <Typography variant='body2' sx={{
                        color: theme.palette.body.primary
                      }}>
                        {teacher.courses} course
                      </Typography>
                      <Box sx={{
                        mt: 1, display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}>

                        <Box>
                          <Typography sx={{
                            fontSize: '14px',
                            color: theme.palette.body.primary
                          }}>
                            <LocationOnOutlinedIcon
                              sx={{
                                fontSize: '16px', color: theme.palette.secondary.main,
                                paddingTop: 0.5
                              }}

                            />
                            {teacher.user.country}
                          </Typography>
                        </Box>
                        <Box component="fieldset" borderColor="transparent">
                          <Rating
                            name="read-only"
                            value={teacher.rating}
                            precision={0.5}
                            readOnly
                            sx={{ fontSize: '16px' }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  )
                })
                }
              </Grid>
            </Grid>
            <Box sx={{
              display: 'flex',
              mt: '3%',
              ml: '5%'
            }}>
              <Typography variant='h5'>
                Top Courses
              </Typography>
            </Box>
            <Grid container
              component="main"
              sx={{ ml: '5%', marginY: '2%' }}>
              <Grid item xs={12} sm={6} md={4} lg={3} elevation={6} square>
                {courses && courses.map((course) => {
                  return (
                    <Box sx={{
                      backgroundColor: '#4462b3',
                      padding: 1,
                      border: 1,
                      borderRadius: 3,
                      borderColor: '#4462b3'
                    }}
                      key={course._id}
                    >

                      <Typography
                        variant='h5'
                        sx={{
                          mt: 3,
                          color: '#fff',
                          fontWeight: 'bold',
                          ml: 2,
                          mb: 1
                        }}>
                        {course.course?.name?.toUpperCase()}
                      </Typography>
                      <Typography variant='p' sx={{
                        color: '#fff',
                        fontSize: '20px',
                        m: '4%'

                      }}>
                        <PersonOutlineOutlinedIcon fontSize="large" sx={{ fontSize: '25px', pt: 0.7 }} />
                        {course.teacher?.name}
                      </Typography>
                      <Box sx={{
                        mt: 3, display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start', color: '#fff',
                        ml: 2
                      }}>


                        <Box sx={{ mt: 1 }} >
                          <StarIcon sx={{ color: '#d5db2e' }} />
                        </Box>
                        <Box sx={{ mt: 1.1, ml: 1 }}>
                          <Typography>
                            {course.rating} .
                          </Typography>
                        </Box>

                        <Box sx={{ mt: 1.1, ml: 0.5 }}>
                          <Typography >

                            {course.totalReviews} Reviews
                          </Typography>
                        </Box>

                      </Box>
                    </Box>
                  )
                })
                }
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Suspense>
    </Fragment>

  )
}
