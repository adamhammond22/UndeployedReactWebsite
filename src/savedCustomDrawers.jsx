import React, {useContext} from 'react';
// import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import ListItem from '@mui/material/ListItem';
// import CloseIcon from '@mui/icons-material/Close';
// import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import {ThemeStateContext} from './Contexts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// const pages = ['Contact', 'Projects', 'Resume', 'Games'];
/**
 * Navbar Drawer creator
 * @return {object} JSX
 */
function CustomNavbar() {
  /* Theme State */
  const {themeState, changeThemeState} = useContext(ThemeStateContext);
  /* State to track if collapsed navbar open */
  // const [collapsedIsOpen, setCollapsedIsOpen] = useState(false);
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
        <AppBar position="static"
        color = 'primary'>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              News
            </Typography>
            <IconButton onClick = {handleSettingsClick}>
              <SettingsIcon />
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
          </Toolbar>
        </AppBar>
      </Box>
  );
};
export {CustomNavbar};
