import React, {useContext} from 'react';
// import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
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
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import {ThemeStateContext} from './Contexts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

const resumeLink = 'AdamHammondResumeNov22-4.pdf';

/* Menu buttons for both navbars */
const menuButtons = () => {
  return (
    <Box>
      <Link href='/'>
        <Button
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'secondary'
          variant = 'contained'
          startIcon={<HomeIcon />}
          name = {'Home button'}
          key = 'Home'>
          <Typography variant = "h6">
            Home
          </Typography>
        </Button>
      </Link>
      <Button
        sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
        color = 'secondary'
        variant = 'contained'
        startIcon={<QuestionAnswerIcon />}
        name = {'Contact button'}
        key = 'Contact'>
        <Typography variant = "h6">
          Contact
        </Typography>
      </Button>
      <Link href='/Projects'>
        <Button
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'secondary'
          variant = 'contained'
          startIcon={<WorkHistoryIcon />}
          name = {'Projects button'}
          key = 'Projects'>
          <Typography variant = "h6">
            Projects
          </Typography>
        </Button>
      </Link>
      <Link href= {resumeLink} target="_blank">
        <Button
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'secondary'
          variant = 'contained'
          startIcon={<ContactPageIcon />}
          name = {'Resume button'}
          key = 'Resume'>
          <Typography variant = "h6">
            Resume
          </Typography>
        </Button>
      </Link>
      <Button
        sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
        color = 'secondary'
        variant = 'contained'
        startIcon={<VideogameAssetIcon />}
        name = {'Games button'}
        key = 'Games'>
        <Typography variant = "h6">
          Games
        </Typography>
      </Button>
    </Box>
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
        sx = {{xs: 'block', md: 'none', minWidth: 100}}
        label = 'Main Navbar'
        anchor = 'left'
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


/**
 * Navbar Drawer creator
 * @return {object} JSX
 */
function loading() {
  return (
  <Box sx = {{width: `calc(100%)`, height: `calc(100%)`}}
    backgroundColor = 'tertiary.main'>
    <Typography>
      I am loading
    </Typography>
  </Box>
  );
};

export {CustomNavbar};
export {loading};
