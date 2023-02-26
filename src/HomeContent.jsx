import React from 'react';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const courses = [
  'Probability & Statistics',
  'Computer Architecture',
  'Comp. Systems & C Programming',
  'Full Stack Web Development',
  'Programming Abstractions Python',
  'Principles of Computer System Design',
  'Intro to Computer Networks',
  'Intro to Algorithm Analysis',
  'Data Structures and Algorithms',
  'Natural Language Processing',
];

/* right Content Boxes*/
const rightContentBoxes = () => {
  return (
    <Box>
      <Box color = 'quaternary.contrastText' backgroundColor = 'quaternary.main'
        sx = {{p: 3, mb: 2}} name = 'about'>
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
      <Box color = 'quaternary.contrastText' backgroundColor = 'quaternary.main'
        sx = {{p: 3, mb: 2}} name = 'experience'>
        <Typography variant = "h3" sx = {{mb: 2}}>
        Experience
        </Typography>
        {/* Box holding the 2 halves */}
        <Box sx = {{display: 'flex',
          flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* Left Half - Job Details further divided into 2 */}
          <Box sx = {{flexGrow: 1, display: 'flex',
            flexDirection: {xs: 'column', experiencebr: 'row'},
            minWidth: 170}}>
            <Box sx = {{flexGrow: 1}}>
              <Typography variant = "p3">
                <i><b>Red Tide Games</b></i><br />
              </Typography>
              <Typography variant = 'p4'>
              Junior Programmer
              </Typography>
            </Box>
            <Box sx = {{
              flexGrow: 1, lineHeight: 1.7}}>
              {/* Hacked way to deal with text not aligning right without
              align = 'right' */}
              <Box align = 'right'
                sx = {{display: {xs: 'none', experiencebr: 'block'}}}>
                <Typography variant = "p4">
                  May 2021 - Sept 2022<br />
                </Typography>
                <Typography variant = 'p4'>
                  Santa Rosa, CA
                </Typography>
              </Box>
              <Box
                sx = {{mt: 2, display: {xs: 'block', experiencebr: 'none'}}}>
                <Typography variant = "p4">
                  May 2021 - Sept 2022<br />
                </Typography>
                <Typography variant = 'p4'>
                  Santa Rosa, CA
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Spacing box between the halves */}
          <Box backgroundColor = 'secondary.main'
            sx = {{flexShrink: 1, minWidth: 5, ml: 4, mr: 4}}/>
          {/* right Half - Job Description */}
          <Box sx = {{flexGrow: 1, maxWidth: 400}}>
            <Typography variant = "p4">
              Worked Remotely with 2 other programmers on a cohesive
              game in Unreal Engine 5.<br />
              Used Perforce for source control and contributed
              with a  C++ and Unreal Engine 5.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box color = 'quaternary.contrastText' backgroundColor = 'quaternary.main'
        sx = {{p: 3, mb: 2}} name = 'about'>
        <Typography variant = "h3" sx = {{mb: 3}}>
        Relevant Coursework
        </Typography>
        <Grid container spacing={{xs: 2, md: 3}}
          columns={{xs: 4, sm: 8, md: 8, xl: 12}}>
          {courses.map((course, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Box alignItems = 'center' justifyContent='center'
                sx = {{p: 1, display: 'flex', minHeight: 50, border: 2,
                  borderColor: 'secondary.main', height: 'auto',
                  borderRadius: 4}}>
                <Typography variant = 'p4' align = 'center'>
                  <b>{course}</b>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
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
          lineHeight: 1.6, mt: 2}}>
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
        <Box sx = {{lineHeight: 1.6, mt: 2}}>
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
        <Box sx = {{lineHeight: 1.6, mt: 2}}>
          <Typography variant = "p3">
            React.js<br/>
            Node.js & Express<br/>
            Open API<br/>
            RESTful APIs<br/>
          </Typography>
        </Box>
      </Box>
      {/* Frameworks and Specs Box */}
      <Box backgroundColor = 'primary.main'
        color = 'primary.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h3" name = 'frameworks and specifications'>
        Education
        </Typography>
        <Box sx = {{mt: 2}}>
          <Typography variant = "p3">
            <b>B.S. Computer Science</b><br />
          </Typography>
          <Typography variant = "p4">
        University of California Santa Cruz<br/>
        2020-2024(expected)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


export {leftContentBoxes};
export {rightContentBoxes};
