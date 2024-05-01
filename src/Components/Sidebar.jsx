import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  const theme = useTheme()
  const handleLogout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    window.location.href = '/';
  }

  const navigate = useNavigate()
  const components = [
    {
      id: 1,
      url: "/",
      icon: <HomeIcon />
    },
    {
      id: 2,
      url: "/call",
      icon: <CallIcon />
    },
    {
      id: 3,
      url: "/chat",
      icon: <ChatIcon />
    },
   
  ]
  return (
    <Box sx={{ display: 'flex' , backgroundColor : theme.palette.navbar.main }}>
  

      <Drawer
        sx={{
          width: 160,
          flexShrink: 0
          , backgroundColor : theme.palette.navbar.main,
          '& .MuiDrawer-paper': {
            width: 160,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
       
        <Toolbar />
        <List >
          {components.map((component) => (
            <ListItem key={component.id}
              sx={{
              }}
            >
              <ListItemButton
                onClick={
                  () => navigate(component.url)
                }
                sx={{
                  justifyContent: 'center',
                  marginBottom: '1%',
                }}>
                <ListItemIcon>
                  {component.icon}
                </ListItemIcon>
              </ListItemButton>

            </ListItem>
          ))}
        </List>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          mr: '20%',
          mt: '35%',
          color:'#000'
        }}>
          <ExitToAppIcon sx={{
            cursor: 'pointer',
            color:'#000'
          }} onClick={handleLogout} />
        </Box>
      </Drawer>

    </Box>
  );
}
