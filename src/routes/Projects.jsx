import React from 'react';
import {CustomNavbar, CustomFooter} from '../Components';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import {Typography} from '@mui/material';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import {useTheme} from '@mui/material/styles';
// import Link from '@mui/material/Link';

/**
 * Projects Components
 * @return {object} JSX
 */
function Projects() {
  return (
    <Box>
      <CustomNavbar currentPage={'Projects'}/>
      <Box name= 'content' sx={{display: 'flex', alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'}}>
        {/* Projects */}
        <Box backgroundColor = 'quaternary.main'
          sx = {{height: 'auto', width: `calc(90%)`,
            mt: 2, mb: 2, flexDirection: 'column', alignItems: 'center'}} >
          {/* projects line 1*/}
          <Box sx = {{display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            <Box backgroundColor = 'red'
              sx = {{height: 300, width: 300}}/>
            {/* Spacing Box */}
            <Box sx = {{flexShrink: 1, minWidth: 10,
              display: {xs: 'none', md: 'block'}}}/>
            <Box backgroundColor = 'blue'
              sx = {{height: 300, width: 300}}/>
          </Box>
          {/* projects line 2*/}
          <Box sx = {{display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            <Box backgroundColor = 'yellow'
              sx = {{height: 300, width: 300}}/>
            {/* Spacing Box */}
            <Box sx = {{flexShrink: 1, minWidth: 10,
              display: {xs: 'none', md: 'block'}}}/>
            <Box backgroundColor = 'green'
              sx = {{height: 300, width: 300}}/>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <CustomFooter />
    </Box>
  );
}

export default Projects;
