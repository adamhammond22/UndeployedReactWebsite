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


/* Left Content Boxes*/
const leftContentBoxes = () => {
  return (
    <Typography variant = "h6">
    LeftStuff
    </Typography>
  );
};
/* Right Content Boxes*/
const rightContentBoxes = () => {
  return (
    <Typography variant = "h6">
    RightStuff!
    </Typography>
  );
};

/**
 * Main Content creator
 * @return {object} JSX
 */
function MainContent() {
  /* We render default or narrow based on theme breakpoint */
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  if (matches) {
    return (
      <Box name= 'content' sx={{display: 'flex', justifyContent: 'center',
        flexDirection: 'row', minWidth: 900, width: '90%', mt: 5}}>
        <Box sx={{display: 'flex', width: '100%', height: 500}}
        backgroundColor = 'primary.main' >
          {rightContentBoxes()}
        </Box>
        <Box sx={{display: 'flex', width: '100%', height: 300}}
          backgroundColor = 'secondary.contrastText'>
          {leftContentBoxes()}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        {leftContentBoxes()}
      </Box>);
  }
};

export {MainContent};
export {CustomNavbar};
