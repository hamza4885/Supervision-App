import React, { Suspense ,lazy } from 'react';
import DailyIframe from '@daily-co/daily-js';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
const Sidebar = lazy(() => import('../../../Sidebar'))
const Navbar = lazy(() => import('../Navbar'))
const VideoCall = () => {

    const theme = useTheme()
    const startVideoCall = async () => {
        const callFrame = DailyIframe.createFrame({
            showLeaveButton: true,
        });

        callFrame.join({ url: 'https://educationapp.daily.co/test' });
        callFrame.render(document.getElementById('daily-frame'));
    };

    return (
        <>
            <Suspense fallback={<div>loading...</div>}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: theme.palette.background.landingBG,
                    overflow: 'hidden',
                    height:'100vh'
                }}>
                    <Sidebar />
                    <Box sx={{ flexGrow: 1 }}>
                        <Navbar />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems:'center',
                        my:10
                    }}>
                        <Typography variant='h4'>Video Call</Typography>
                        <Button variant='contained'
                         sx={{my:2}} onClick={startVideoCall}>Start Video Call</Button>
                        <div id="daily-frame"></div>
                    </Box>
                    </Box>
                </Box>
            </Suspense>
       

        </>
    );
};

export default VideoCall;
