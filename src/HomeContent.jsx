import React from 'react';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

/* right Content Boxes*/
const rightContentBoxes = () => {
  return (
    <Box backgroundColor = 'green'
      sx = {{height: 300}}>
      <Typography variant = "h3">
      About Me
      </Typography>
      <Typography variant = "p3">
        I'm interested in Algorithems, Systema, Machine Learning,
        Networking, and more! I'm currently looking for a 2023
        Summer Internship, as well as opportunities after I
        graduate in June 2024!
      </Typography>
    </Box>
  );
};

/* left Content Boxes*/
const leftContentBoxes = () => {
  return (
  <Box sx = {{minWidth: 400}}>
    {/* Languages Box */}
    <Box backgroundColor = 'primary.main'
    color = 'primary.contrastText' sx = {{p: 3, mb: 2}}>
      <Typography variant = "h3" name = 'languages' sx = {{mb: 1}}>
      Languages
      </Typography>
      {/* Left and Right side boxes */}
      <Box sx = {{display: 'flex',
        flexDirection: 'row', justifyContent: 'space-between',
        lineHeight: 1.6}}>
        {/* Left side box */}
        <Box name = 'languages left'>
          <Typography variant = "p3">
            C<br/>
            C++<br/>
            Python<br/>
            JavaScript & React<br/>
            HTML & CSS<br/>
            PostgreSQL<br/>
          </Typography>
        </Box>
        {/* right side box */}
        <Box align = 'right' name = 'languages right'>
          <Typography variant = "p3">
            Proficient<br/>
            Competent<br/>
            Proficient<br/>
            Competent<br/>
            Competent<br/>
            Novice<br/>
          </Typography>
        </Box>
      </Box>
    </Box>
    {/* Skills Box */}
    <Box backgroundColor = 'primary.main'
    color = 'primary.contrastText' sx = {{p: 3, mb: 2}}>
      <Typography variant = "h3" name = 'technologies'
        sx = {{mb: 1}}>
      Technologies
      </Typography>
      <Box sx = {{lineHeight: 1.6}}>
          <Typography variant = "p3">
            Windows, Unix & Linux<br/>
            Command Line & Bash Scripting<br/>
            Make<br/>
            Docker<br/>
            LaTeX<br/>
            Git & Perforce<br/>
            Unreal Engine 4 & 5<br/>
          </Typography>
      </Box>
    </Box>
    {/* Frameworks and Specs Box */}
    <Box backgroundColor = 'primary.main'
      color = 'primary.contrastText' sx = {{p: 3, mb: 2}}>
      <Typography variant = "h3" name = 'frameworks and specifications'>
      Frameworks & Specs
      </Typography>
      <Box sx = {{lineHeight: 1.6}}>
          <Typography variant = "p3">
            React.js<br/>
            Node.js & Express<br/>
            Open API<br/>
            RESTful APIs<br/>
          </Typography>
      </Box>
    </Box>
  </Box>
  );
};


export {leftContentBoxes};
export {rightContentBoxes};
