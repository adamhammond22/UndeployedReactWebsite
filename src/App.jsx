import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {darkTheme, lightTheme} from './Themes';
import {ThemeStateContext} from './Contexts';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Home from './Home';
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
  /* Set current theme according to theme state */
  const currentTheme = themeState === 'dark'? createTheme({darkTheme}) :
    createTheme(lightTheme);
  useEffect(() => {
    console.log('state:' + themeState);
  });
  /* Context to pass setThemeState to children */
  return (
      <ThemeProvider theme = {currentTheme}>
        <CssBaseline /> {/* For Background Color */}
        <ThemeStateContext.Provider value = {{themeState, changeThemeState}}>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Home />} />
              </Routes>
            </BrowserRouter>
        </ThemeStateContext.Provider>
      </ThemeProvider>
  );
};

export default App;