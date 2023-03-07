import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {CustomNavbar, CustomFooter} from '../Components';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Typography} from '@mui/material';
import {leftContentBoxes, rightContentBoxes} from '../HomeContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import Link from '@mui/material/Link';
// import {useNavigate} from "react-router-dom";

const githubLink = 'https://github.com/adamhammond22';
const linkedInLink = 'https://www.linkedin.com/in/adamhammond22/';

/**
 * Home Component
 * @return {object} JSX
 */
function Home() {
  return (
    <Box>
      <CustomNavbar currentPage={'Home'}/>
      <Box name= 'content' sx={{display: 'flex', alignItems: 'center',
        flexDirection: 'column'}}>
        {/* Top Box */}
        <Box sx={{display: 'flex', minWidth: 320, width: `calc(90%)`,
          height: 'auto', mt: 5, flexDirection: {xs: 'column', md: 'row'},
          p: '16px', alignItems: 'center'}}
        backgroundColor = 'tertiary.main' name = 'greeting box'>
          <Box component = 'img' src="adam2.jpg" width = '40%' height = '40%'
            sx = {{height: 330, width: 413,
              maxHeight: {xs: 370, md: 330},
              maxWidth: {xs: 453, md: 413},
              flexShrink: 1, border: 15, borderColor: 'quaternary.main'}}/>
          <Box sx = {{pl: 5, flexShrink: 1}}>
            <Typography variant = 'p1' color = 'tertiary.contrastText'>
              Hello There! <br />
            </Typography>
            <Typography variant = 'p2' color = 'tertiary.contrastText'>
              I'm Adam Hammond, <br />
              I am a 3rd year Computer Science student at
              University of California, Santa Cruz.
            </Typography>
            <br />
            <IconButton>
              <Link href= {githubLink} target="_blank">
                <GitHubIcon sx = {{height: 40, width: 40}}
                  color = 'welcomeBoxLinks'/>
              </Link>
            </IconButton>
            <IconButton>
              <Link href= {linkedInLink} target="_blank">
                <LinkedInIcon sx = {{height: 40, width: 40}}
                  color = 'welcomeBoxLinks'/>
              </Link>
            </IconButton>
          </Box>
        </Box>
        {/* Main Content Box */}
        <Box sx = {{minWidth: 320, width: `calc(90%)`,
          mt: 2, height: 'auto'}}>
          <MainContent name = 'main Content'/>
        </Box>
      </Box>
      <CustomFooter />
    </Box>
  );
}

/**
 * Main Content creator
 * Splits Content into 2 or 1 column based on breakpoint
 * @return {object} JSX
 */
function MainContent() {
  /* We render default or narrow based on theme breakpoint */
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  /* If md or larger, return content in 2 columns */
  if (matches) {
    return (
      <Box name= 'content' sx={{display: 'flex',
        justifyContent: 'space-between', flexDirection: 'row'}}>
        <Box sx={{flexDirection: 'column', flexGrow: 5, maxWidth: 1000}}>
          {rightContentBoxes()}
        </Box>
        {/* Splitting box in middle */}
        <Box sx={{flexDirection: 'column', flexGrow: 2, maxWidth: 400,
          ml: 2}}>
          {leftContentBoxes()}
        </Box>
      </Box>
    );
  /* If small, return content in 1 column */
  } else {
    return (
      <Box name= 'content' sx={{display: 'flex', justifyContent: 'center',
        flexDirection: 'column'}}>
        {leftContentBoxes()}
        {rightContentBoxes()}
      </Box>);
  }
};

export default Home;
