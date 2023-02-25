import React, {useContext} from 'react';
// import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MenuItem from '@mui/material/MenuItem';
import ContactPageIcon from '@mui/icons-material/ContactPage';
// import ListItem from '@mui/material/ListItem';
// import CloseIcon from '@mui/icons-material/Close';
// import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import {ThemeStateContext} from './Contexts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
/* Handles Pages and their respective Icons */
const pages = ['Contact', 'Projects', 'Resume', 'Games'];
const pageIconReturner = (index) => {
  if (pages[index] === 'Contact') {
    return (<QuestionAnswerIcon />);
  } else if (pages[index] === 'Projects') {
    return (<WorkHistoryIcon />);
  } else if (pages[index] === 'Resume') {
    return (<ContactPageIcon />);
  } else if (pages[index] === 'Games') {
    return (<VideogameAssetIcon />);
  }
};

/* Menu buttons for both navbars */
const menuButtons = () => {
  return (
    pages.map((page, index)=>(
      <Button
        sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
        color = 'secondary'
        variant = 'contained'
        startIcon={pageIconReturner(index)}
        name = {page + ' button'}
        key = {page}>
        <Typography variant = "h6">
        {page}
        </Typography>
      </Button>
    ))
  );
};

/**
 * Navbar Drawer creator
 * @return {object} JSX
 */
function CustomNavbar() {
  /* Theme State */
  const {themeState, changeThemeState} = useContext(ThemeStateContext);

  /* State to track if collapsed navbar open */
  const [CollapsedNBOpen, setCollapsedNBOpen] = React.useState(false);

  /* State to track anchor of settings */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const settingsOpen = Boolean(anchorEl);

  /* Handles a change in collapsed NB, setting it to bool */
  const handleChangeCollapsed = (bool) => {
    console.log('changecalled');
    if (CollapsedNBOpen) {
      setCollapsedNBOpen(false);
    } else {
      setCollapsedNBOpen(true);
    }
  };

  /* Debug
  React.useEffect(() => {
    console.log('navbar open:' + CollapsedNBOpen);
  }); */

  /* Handles opening and closing settings */
  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setAnchorEl(null);
  };
  /* Handles theme change */
  const handleDarkModeChange = () => {
    if (themeState === 'dark') {
      changeThemeState('light');
    } else {
      changeThemeState('dark');
    }
  };

  return (
      <Box sx={{flexGrow: 1}}>
        {/* Collapsed Navbar */}
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx = {{xs: 'block', md: 'none'}}
          label = 'Main Navbar'
          anchor = 'left'
          sx = {{minWidth: 100}}
          name = 'left navbar'
          open = {CollapsedNBOpen}
          onClose = {handleChangeCollapsed}
          variant = 'temporary'
          PaperProps={{sx: {width: 160}}}>
          <IconButton />
          {menuButtons()}
        </Drawer>
        {/* Top Navbar */}
        <AppBar position="static"
        color = 'primary' name = 'top navbar'>
          <Toolbar>
            {/* Collapsed Options */}
            <IconButton sx =
              {{display: {xs: 'flex', md: 'none', padding: 0},
                fontSize: 40, height: 60, width: 60}}
              name = 'navbar options' color = 'tertiary' size = 'large'
              onClick = {handleChangeCollapsed}>
              <MenuIcon sx = {{height: 40, width: 40}} />
            </IconButton>
            {/* Typography box */}
            <Box sx = {{display: 'flex', flexGrow: 1,
              justifyContent: 'left'}}name = 'typography box'>
              <Typography variant="h2" component="div" sx={{display: 'flex'}}>
                Adam Hammond
              </Typography>
            </Box>
            {/* Button Box */}
            <Box sx = {{flexGrow: 2, justifyContent: 'flex-end',
              display: {xs: 'none', md: 'flex'}}} name = 'button box'>
              {/* Buttons Box*/}
              {menuButtons()}
            </Box>
            {/* Settings Box*/}
            <Box sx = {{flexShrink: 1, mr: 2,
              width: 0, justifyContent: 'flex-end'}}
              name = 'settings box'>
              <IconButton onClick = {handleSettingsClick}
                name = 'settings button'>
                <SettingsIcon color = 'tertiary'/>
              </IconButton>
              <Menu
                anchorEl = {anchorEl}
                open = {settingsOpen}
                onClose = {handleSettingsClose}>
                <MenuItem>
                  <FormGroup>
                  <FormControlLabel control={<Switch
                  checked = {themeState === 'dark'}
                  onChange = {handleDarkModeChange}/>} label="Dark Mode" />
                  </FormGroup>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
};


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
  <Box sx = {{minWidth: 340}}>
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
        <Box>
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
        <Box align = 'right'>
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
      {/* Left and Right side boxes */}
      <Box sx = {{display: 'flex',
        flexDirection: 'row', justifyContent: 'space-between',
        lineHeight: 1.6}}>
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
      color = 'primary.contrastText' sx = {{p: 3, mb: 2}}
      sx = {{mb: 1}}>
      <Typography variant = "h3" name = 'frameworks and specifications'>
      Frameworks & Specs
      </Typography>
      {/* Left and Right side boxes */}
      <Box sx = {{display: 'flex',
        flexDirection: 'row', justifyContent: 'space-between',
        lineHeight: 1.6}}>
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

export {MainContent};
export {CustomNavbar};
