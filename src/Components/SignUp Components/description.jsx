import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import doodle from '../../assets/Main/doddle.jpg';
import doodleXS from '../../assets/Main/doddlexs.jpg';
import { useTheme } from '@emotion/react';
import { getCourses } from '../../Api/Others/Courses/getCourses';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Register } from '../../Api/Auth/register';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';


export default function Main1() {
  const [appname, setAppname] = useState('Education App');
  const [currentComponent, setCurrentComponent] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [courseOptions, setCourseOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [description , setDescription ] = useState(null)
  const [school , setSchool ] = useState(null)
  const [fieldOfStudy , setfieldOfStudy ] = useState(null)
  const [type , setType ] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', success: false });


  const location = useLocation()
  const user = location?.state?.user
  const getCoursesData = async () => {
    try {
      const res = await getCourses();
      if (res != null) {
        const options = res.map((course) => ({ label: course.name, value: course._id }));
        setCourseOptions(options);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    getCoursesData();
    console.log(description , school ,fieldOfStudy )
  }, []);

  const navigate = useNavigate();
  const isXSmallScreen = useMediaQuery('(max-width: 599px)');
  const isSmallScreen = useMediaQuery('(max-width: 871px)');

  const components = [
    {
      id: 1,
      image: doodle,
      content: 'What Best Describes You?',
      options: [
        { label: 'Student College', value: 'Student College', icon: <MenuBookIcon sx={{ color: '#c81e1e' }} /> },
        { label: 'Student', value: 'Student', icon: <SchoolIcon sx={{ color: '#5a5a5a' }} /> },
        { label: 'United Kingdom', value: 'United Kingdom', icon: <LocalLibraryIcon sx={{ color: '#d09a47' }} /> },
      ],
    },
    {
      id: 2,
      image: doodle,
      content: 'What is your field of Study?',
      options: [
        { label: 'Faculty Of Administration Sciences', value: 'Faculty Of Administration Sciences' },
        { label: 'College Sciences', value: 'College Sciences' },
        { label: 'College of Engineering and Petroleum', value: 'College of Engineering and Petroleum' },
      ],
    },
    {
      id: 3,
      image: doodle,
      content: 'What best describes you?',
      options: [
        { label: 'College Student', value: 'College Student', icon: <MenuBookIcon sx={{ color: '#c81e1e' }} /> },
        { label: 'University Student', value: 'University Student', icon: <SchoolIcon sx={{ color: '#5a5a5a' }} /> },
        { label: 'Teacher', value: 'Teacher', icon: <FontAwesomeIcon icon={faPersonChalkboard} style={{ color: "#e5435b" }} /> },
        { label: 'Instructor', value: 'Instructor', icon: <FontAwesomeIcon icon={faUserGraduate} style={{ color: "#e5435b" }} /> },
        { label: 'Other', value: 'Other', icon: <AutoAwesomeMosaicIcon sx={{ color: '#d09a47' }} /> },
      ],
    },
    {
      id: 4,
      image: doodle,
      content: 'What is your school type?',
      options: [
        { label: 'Tenth Grade', value: 'Tenth Grade' },
        { label: 'Grade 11-Scientific', value: 'Grade 11-Scientific' },
        { label: 'Eleventh Grade-Literary', value: 'Eleventh Grade-Literary' },
        { label: 'Grade 12-Scientific', value: 'Grade 12-Scientific' },
        { label: 'Twelfth Grade-Literary', value: 'Twelfth Grade-Literary' },
      ],
    },
    {
      id: 5,
      image: doodle,
      content: 'What subjects do you need help with?',
      options: courseOptions,
    },
  ];

  const theme = useTheme();

  const handleOptionSelect = async (option , index) => {
    switch (index) {
      case 1:
        setDescription(option)
        break;
      case 2:
        setSchool(option)
        break;
      case 3:
        setfieldOfStudy(option)
        break;
      case 4:
        setType(option)
        break;
      default:
        break;
    }
    if (currentComponent === 5 && option !== 'Next' && option !== 'skip') {
      const newSelectedOptions = [...selectedOptions];
      if (newSelectedOptions.includes(option)) {
        newSelectedOptions.splice(newSelectedOptions.indexOf(option), 1);
      } else {
        newSelectedOptions.push(option);
      }
      setSelectedOptions(newSelectedOptions);
    }
    else if(option === 'skip' || option === 'Next'){
        if(option == 'skip') {
          const User = {
            name: user.name,
            email: user.email,
            password:user.password,
            confirmPassword:user.confirmPassword,
            step:2,
            description:description,
            school : school ,
            fieldOfStudy : fieldOfStudy,
            type : type
          }
          const res = await Register(User)
          if(res.success){
            setAlert({
              show: true,
              message: res.message,
              success: true,
            });
    
            setTimeout(() => {
              setAlert({ show: false, message: '', success: true });
            }, 5000);
            navigate('/SignIn')
          }
          else{
            setAlert({
              show: true,
              message: res.message,
              success: false,
            });
    
            setTimeout(() => {
              setAlert({ show: false, message: '', success: false });
            }, 5000);
          }
        }
        else{
          const User = {
            name: user.name,
            email: user.email,
            password:user.password,
            confirmPassword:user.confirmPassword,
            step:2,
            description:description,
            school : school ,
            fieldOfStudy : fieldOfStudy,
            type : type,
            subjects : selectedOptions
          }
          const res = await Register(User)
          if(res.success){
            setAlert({
              show: true,
              message: res.message,
              success: true,
            });
    
            setTimeout(() => {
              setAlert({ show: false, message: '', success: true });
            }, 5000);
            navigate('/SignIn')
          }
          else{
            setAlert({
              show: true,
              message: res.message,
              success: false,
            });
    
            setTimeout(() => {
              setAlert({ show: false, message: '', success: false });
            }, 5000);
          }
        }
    }
    else if (currentComponent < components.length) {
      setCurrentComponent(currentComponent + 1);
      setShowSelect(components[currentComponent].id === 5);
    } 
  };

  const handleBack = () => {
    if (currentComponent > 1) {
      setCurrentComponent(currentComponent - 1);
      setSelectedOption('');
      setShowSelect(components[currentComponent - 1].id === 5);
    } else {
      navigate('/SignUp');
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{
       
        backgroundColor: { xs: '#fff', sm: '#f3f4f6' },
      }}
    >
      {isXSmallScreen && (
        <img
          src={doodleXS}
          alt="doodleXS"
          style={{
            width: '100%',
            height: 170,
            margin: 0,
          }}
        />
      )}

      <Grid item xs={12} sm={6} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            mx: 3,
            my: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bolder',
              color: theme.palette.secondary.main,
            }}
            variant="h4"
          >
            {appname}
          </Typography>
        </Box>
        <Box
          sx={{
            mx: 3,
            paddingX: isSmallScreen ? '5%' : '15%',
          }}
        >
          <Box sx={{ mt: '16%' }}>
            <ArrowBackIosIcon sx={{ mb: 3 }} onClick={handleBack} />
            <LinearProgress variant="determinate" color="secondary" value={(currentComponent) * 20} />
          </Box>
          <Typography sx={{ textAlign: 'center', marginTop: '7%', fontWeight: 'bold' }}>
            {components[currentComponent - 1].content}
          </Typography>
          <Grid container component="main" sx={{ margin: '7% 0' }}>
            {showSelect ? (
              <>
               
                <Box  sx={{  marginTop: '4%'  }}>
                  {courseOptions.map((option) => (
                    <Box key={option.value} sx={{
                      border: 2 , padding : 2 , borderRadius :5, display : 'flex',
                      flexDirection:'row', 
                    }}
                    onClick={() => handleOptionSelect(option.value)}
                    >
                        <Checkbox
                          checked={selectedOptions.includes(option.value)}
                          onChange={() => handleOptionSelect(option.value)}
                      
                        />
                        <Typography 
                          sx={{ 
                            fontSize: '20px', 
                            fontWeight: 500,
                            cursor:'pointer'
                          }}
                        >
                          {option.label}
                        </Typography>
                      
                    </Box>
                  ))}
                </Box>
                <Box sx={{           
                  display: 'flex',
                    marginTop: '4%',
                    flexDirection: 'row',
                    
                    }}>
                
                <Button
                  variant="contained"
                  color="background"
                  sx={{
                    width: '100%',
                    m:2,
                    border: 2,
                    justifyContent: 'center',
                    backgroundColor:theme.palette.background.default,
                    borderColor: theme.palette.secondary.main,
                    color:theme.palette.secondary.main
                  }}
                  onClick={() => handleOptionSelect('skip' , components[currentComponent - 1].id)}
                >
                  <Typography sx={{ fontSize: '13px', fontWeight: 500 }}>
                    Skip & Register
                  </Typography>
                 
                </Button>
                <Button
                  variant="contained"
                  color="background"
                  sx={{
                    width: '100%',
                    m:2,
                    border: 0.5,
                    justifyContent: 'center',
                    backgroundColor:theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    color:theme.palette.text.button,
                    textAlign:'center',

                  }}
                  onClick={() => handleOptionSelect('Next' , components[currentComponent - 1].id)}
                >
                  <Typography sx={{textAlign:'center', fontSize: '13px', fontWeight: 500 }}>
                    Register
                  </Typography>
                </Button>
                </Box>
              </>
            ) : (
              components[currentComponent - 1].options.map((option, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color="background"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    marginBottom: '4%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    border: 0.5,
                    borderColor: '#f3f4f6',
                  }}
                  onClick={() => handleOptionSelect(option.value,components[currentComponent - 1].id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {option.icon && option.icon}
                    <Typography sx={{ ml: 2, fontSize: '13px', fontWeight: 500 }}>
                      {option.label}
                    </Typography>
                  </div>
                  <ArrowForwardIcon />
                </Button>
              ))
            )}
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
      >
        <Box
          sx={{
            mx: 4,
            my: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#fff',
            border: 1,
            borderColor: '#fff',
            borderRadius: 5,
          }}
        >
          <Box sx={{ padding: 1.5 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: isSmallScreen ? '1.5rem' : '2rem',
                mt: isSmallScreen && '5%',
              }}
            >
              Create Account And Start learning
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: isSmallScreen ? '1rem' : '1.2rem',
                mt: isSmallScreen && '5%',
              }}
            >
              Unlock a world of knowledge with our innovative education app - where learning meets
              technology for an immersive and personalized educational experience.
            </Typography>
          </Box>
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              height={isSmallScreen ? '50%' : '100%'}
              width={isSmallScreen ? 240 : 340}
              style={{ marginTop: isSmallScreen ? '13%' : 0 }}
              src={doodle}
              alt="doodle"
            />
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
          backgroundColor: alert.success ? '#179c0e' : '#ff5050',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{
          display:'flex',
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
