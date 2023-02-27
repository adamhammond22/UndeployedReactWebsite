import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {darkTheme, lightTheme} from './Themes';
import {ThemeStateContext} from './Contexts';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Home from './Home';
import Projects from './Projects';
import CssBaseline from '@mui/material/CssBaseline';
/**
 * App Component, routes all other components.
 * @return {object} JSX
 */
function App() {
  /* Page Theme State */
  const [themeState, setThemeState] = React.useState('light');
  const changeThemeState = (newState) => {
    if (themeState !== newState) {
      setThemeState(newState);
    }
  };

  /* WIP dark state not switching fast enough for me */
  useEffect(() => {
    const item = window.localStorage.getItem('themeState');
    console.log('item?' + item);
    setThemeState(window.localStorage.getItem('themeState'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('themeState', themeState);
  }, [themeState]);


  /* Set current theme according to theme state */
  const currentTheme = themeState === 'dark'? createTheme(darkTheme) :
    createTheme(lightTheme);
  useEffect(() => {
    console.log('state:' + themeState);
    console.log('current theme:' + Object.keys(currentTheme));
  });
  /* Context to pass setThemeState to children */
  return (
    <ThemeProvider theme = {currentTheme}>
      <CssBaseline /> {/* For Background Color */}
      <ThemeStateContext.Provider value = {{themeState, changeThemeState}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Projects" exact element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ThemeStateContext.Provider>
    </ThemeProvider >
  );
};

export default App;
