import React from 'react';
import {CustomNavbar} from './CustomDrawers';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// import {useNavigate} from "react-router-dom";

/**
 * Home Component
 * @return {object} JSX
 */
function Home() {
  // const navigate = useNavigate();
  console.log(__dirname);
  console.log('hello!');
  return (
      <Box>
        <AppBar />
        <CustomNavbar />
        <Box name= 'content' sx={{display: 'flex', alignItems: 'center',
          flexDirection: 'column'}}>
          {/* Top Box */}
          <Box sx={{display: 'flex', minWidth: 500, width: '90%',
            height: 'auto', mt: 5, flexDirection: {xs: 'column', md: 'row'},
            p: 4, alignItems: 'center'}}
            backgroundColor = 'tertiary.main' >
            <Box component = 'img' src="adam2.jpg" width = '40%' height = '40%'
            sx = {{height: 330, width: 413,
              maxHeight: {xs: 370, md: 330},
              maxWidth: {xs: 453, md: 413},
              flexShrink: 1, border: 15, borderColor: 'secondary.main'}}/>
            <Box sx = {{pl: 5, flexShrink: 1}}>
              <Typography variant = 'p1'>
              Hello There! <br />
              </Typography>
              <Typography variant = 'p2'>
              I'm Adam Hammond, <br />
              I am a 3rd year Computer Science student at
              University of California, Santa Cruz.
              </Typography>
              <br />
              <IconButton color = 'primary'>
                <GitHubIcon sx = {{height: 40, width: 40}}/>
              </IconButton>
              <IconButton color = 'primary'>
                <LinkedInIcon sx = {{height: 40, width: 40}}/>
              </IconButton>
            </Box>
          </Box>
          <Box name= 'content' sx={{display: 'flex', justifyContent: 'center',
          flexDirection: 'row', minWidth: 900, width: '90%', mt: 5}}>
            {/* Hello Box */}
            <Box sx={{display: 'flex', width: '100%', height: 500}}
            backgroundColor = 'primary.main'>
            </Box>
            <Box sx={{display: 'flex', width: '100%', height: 300}}
              backgroundColor = 'secondary.contrastText'>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}

export default Home;
