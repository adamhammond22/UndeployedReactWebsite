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

/**
 * Navbar Drawer creator
 * @return {object} JSX
 */
function CustomNavbar() {
  /* Theme State */
  const {themeState, changeThemeState} = useContext(ThemeStateContext);

  /* State to track if collapsed navbar open */
  // const [CollapsedNBOpen, setCollapsedNBOpen] = useState(false);

  /* State to track anchor of settings */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const settingsOpen = Boolean(anchorEl);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setAnchorEl(null);
  };
  const handleDarkModeChange = () => {
    if (themeState === 'dark') {
      changeThemeState('light');
    } else {
      changeThemeState('dark');
    }
  };

  return (
      <Box sx={{flexGrow: 1}}>
        <Drawer
          sx = {{xs: 'block', md: 'none'}}
          label = 'collapsed Navbar'
          anchor = 'left'
          open = {false}
          variant = 'persistent'>
        </Drawer>
        <AppBar position="static"
        color = 'primary'>
          <Toolbar>
            {/* Collapsed Options */}
            <IconButton sx =
              {{display: {xs: 'flex', md: 'none', padding: 0},
                fontSize: 40}}
              color = 'tertiary' size = 'large'>
              <MenuIcon size = 'large' sx = {{mr: 3, height: 40, width: 40}}/>
            </IconButton>
            {/* Typography box */}
            <Box sx = {{display: 'flex', flexGrow: 1,
              justifyContent: 'left'}}>
              <Typography variant="h2" component="div" sx={{display: 'flex'}}>
                Adam Hammond
              </Typography>
            </Box>
            {/* Button Box */}
            <Box sx = {{flexGrow: 2, justifyContent: 'flex-end',
              display: {xs: 'none', md: 'flex'}}}>
              {/* Buttons Box*/}
              {pages.map((page, index)=>(
                <Button
                  sx = {{maxWidth: 120, ml: 2}}
                  color = 'secondary'
                  variant = 'contained'
                  startIcon={pageIconReturner(index)}
                  name = {page}
                  key = {page}>
                  <Typography variant = "h6">
                  {page}
                  </Typography>
                </Button>
              ))}
            </Box>
            {/* Settings Box*/}
            <Box sx = {{flexShrink: 1, mr: 2,
              width: 0, justifyContent: 'flex-end'}}>
              <IconButton onClick = {handleSettingsClick}>
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
export {CustomNavbar};
