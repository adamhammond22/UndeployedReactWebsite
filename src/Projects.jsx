import React from 'react';
import {CustomNavbar} from './Components';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import {useTheme} from '@mui/material/styles';
import Link from '@mui/material/Link';

const githubLink = 'https://github.com/adamhammond22';
const linkedInLink = 'https://www.linkedin.com/in/adamhammond22/';

/**
 * Projects Components
 * @return {object} JSX
 */
function Projects() {
  return (
    <Box>
      <CustomNavbar />
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
      <Box sx = {{display: 'flex', backgroundColor: 'primary.main'}}
        color = 'primary.contrastText' name = 'footer'
        alignItems = 'center' justifyContent='center'>
        <Typography variant = 'p2'>
          Adam Hammond
        </Typography>
        <Box sx = {{width: 10}} />
        <IconButton>
          <Link href= {linkedInLink} target="_blank">
            <LinkedInIcon color = 'secondary'
              sx = {{height: 30, width: 30}}/>
          </Link>
        </IconButton>
        <Box sx = {{width: 10}} />
        <IconButton>
          <Link href= {githubLink} target="_blank">
            <GitHubIcon color = 'secondary'
              sx = {{height: 30, width: 30}}/>
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Projects;
