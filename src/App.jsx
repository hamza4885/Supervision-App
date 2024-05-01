import React,{lazy,Suspense,Fragment} from 'react';
import { ThemeProviderWrapper, useThemeContext } from './Theme';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { useTheme
 } from '@emotion/react';
const RouterWithUsers  = lazy(()=> import("./Routes/UserExists/routes"))

const Router = lazy(()=>import("./Routes/routes"))
/*const ThemedComponent = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const theme = useTheme()

  return (
    <div style={{ background: theme.palette.background.default }}>
     
        <Toolbar>
          <Typography variant="h6" sx={{color:theme.palette.text.primary}}>Themed App</Typography>
          <Button onClick={toggleTheme} color="secondary">
            {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
          </Button>
        </Toolbar>
      <div style={{ padding: '16px' }}>
        <Typography variant="body1" sx={{color:theme.palette.text.primary}}>
          This component is themed based on the selected mode.
        </Typography>
      </div>
    </div>
  );
};*/

const App = () => {
  if(!localStorage.getItem('User')){
    return (
      <Suspense fallback={<div>loading Supervision App...</div>}>  
          <Fragment>
          <Router />
         </Fragment>
      </Suspense>  
     );
  }
  else{
    return (
      <Suspense fallback={<div>loading Supervision App...</div>}>  
          <Fragment>
            <RouterWithUsers />
         </Fragment>
      </Suspense>  
     ); 
  }
};

export default App;