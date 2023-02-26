import React from 'react';
import {CustomNavbar} from './CustomNavbar';
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
 * Projects Component
 * @return {object} JSX
 */
function Projects() {
  return (
    <Box>
      <CustomNavbar />
      <Box name= 'content' sx={{display: 'flex', alignItems: 'center',
        flexDirection: 'column'}}>
      </Box>
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
