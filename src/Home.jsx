import React from 'react';
import {CustomNavbar} from './CustomDrawers';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/Box';
// import {useNavigate} from "react-router-dom";

/**
 * Home Component
 * @return {object} JSX
 */
function Home() {
  // const navigate = useNavigate();
  return (
      <Box>
        <AppBar />
        <CustomNavbar />
        <Box name= 'content' sx={{display: 'flex', alignItems: 'center',
          flexDirection: 'column'}}>

          <Box sx={{display: 'flex', minWidth: 900, width: '90%',
            height: 500, mt: 5}}
          backgroundColor = 'tertiary.main'>
          </Box>

          <Box name= 'content' sx={{display: 'flex', justifyContent: 'center',
          flexDirection: 'row', minWidth: 900, width: '90%', mt: 5}}>
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
