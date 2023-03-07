import React, {useContext} from 'react';
// import Drawer from '@mui/material/Drawer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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

const githubLink = 'https://github.com/adamhammond22';
const linkedInLink = 'https://www.linkedin.com/in/adamhammond22/';

/* Return all menu buttons */
const menuButtons = (currentPage)=> {
  return (
    <Box>
      <Button
        sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
        color = 'nbButtons'
        variant = 'contained'
        startIcon={<QuestionAnswerIcon />}
        name = {'Contact button'}
        key = 'Contact'>
        <Typography variant = "h6">
          Contact
        </Typography>
      </Button>
      <Link href= {resumeLink} target="_blank">
        <Button
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'nbButtons'
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
        color = 'nbButtons'
        variant = 'contained'
        startIcon={<VideogameAssetIcon />}
        name = {'Games button'}
        key = 'Games'>
        <Typography variant = "h6">
          Games
        </Typography>
      </Button>
      {pageSpecificButtons(currentPage)}
    </Box>
  );
};

/* Return page specific buttons */
const pageSpecificButtons = (currentPage) => {
  if (currentPage === 'Home') {
    return (
      <Link to='/Projects'>
        <Button
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'nbButtons'
          variant = 'contained'
          startIcon={<WorkHistoryIcon />}
          name = {'Projects button'}
          key = 'Projects'>
          <Typography variant = "h6">
            Projects
          </Typography>
        </Button>
      </Link>
    );
  } else {
    return (
      <Link to='/'>
        <Button
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'nbButtons'
          variant = 'contained'
          startIcon={<HomeIcon />}
          name = {'Home button'}
          key = 'Home'>
          <Typography variant = "h6">
            Home
          </Typography>
        </Button>
      </Link>
    );
  }
};

/**
 * Navbar Drawer creator
 * @param {props} props for current page
 * @return {object} JSX
 */
function CustomNavbar(props) {
  /* Theme State */
  const {themeState, changeThemeState} = useContext(ThemeStateContext);

  /* State to track if collapsed navbar open */
  const [CollapsedNBOpen, setCollapsedNBOpen] = React.useState(false);

  /* State to track anchor of settings */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const settingsOpen = Boolean(anchorEl);

  /* Handles a change in collapsed NB, setting it to bool */
  const handleChangeCollapsed = (bool) => {
    if (CollapsedNBOpen) {
      setCollapsedNBOpen(false);
    } else {
      setCollapsedNBOpen(true);
    }
  };


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
        {menuButtons(props.currentPage)}
      </Drawer>
      {/* Top Navbar */}
      <AppBar position="static"
        color = 'primary' name = 'top navbar'>
        <Toolbar>
          {/* Collapsed Options */}
          <IconButton sx =
            {{display: {xs: 'flex', md: 'none', padding: 0},
              fontSize: 40, height: 60, width: 60}}
          name = 'navbar options' color = 'nbhighlight' size = 'large'
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
            {menuButtons(props.currentPage)}
          </Box>
          {/* Settings Box*/}
          <Box sx = {{flexShrink: 1, mr: 2,
            width: 0, justifyContent: 'flex-end'}}
          name = 'settings box'>
            <IconButton onClick = {handleSettingsClick}
              name = 'settings button'>
              <SettingsIcon color = 'nbhighlight'/>
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
 * Custom Footer creator
 * @return {object} JSX
 */
function CustomFooter() {
  return (
    <Box sx = {{display: 'flex', backgroundColor: 'primary.main'}}
      color = 'primary.contrastText' name = 'footer'
      alignItems = 'center' justifyContent='center'>
      <Typography variant = 'p2'>
        Adam Hammond
      </Typography>
      <Box sx = {{width: 10}} />
      <IconButton>
        <Link href= {linkedInLink} target="_blank">
          <LinkedInIcon color = 'nbButtons'
            sx = {{height: 30, width: 30}}/>
        </Link>
      </IconButton>
      <Box sx = {{width: 10}} />
      <IconButton>
        <Link href= {githubLink} target="_blank">
          <GitHubIcon color = 'nbButtons'
            sx = {{height: 30, width: 30}}/>
        </Link>
      </IconButton>
    </Box>
  );
};

/**
 * Routing Navbar creator
 * @return {object} JSX
 */
function routingNavbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Projects">Projects</Link>
    </div>
  );
};

export {routingNavbar};
export {CustomNavbar};
export {CustomFooter};

