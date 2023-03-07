import React, {lazy, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {darkTheme, lightTheme} from './Themes';
import {ThemeStateContext} from './Contexts';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Suspense} from 'react';

// Lazyload content so they have time to setup themes
const Home = lazy(() => import('./Home'));
const Projects = lazy(() => import('./Projects'));

/**
 * App Component, routes all other components.
 * @return {object} JSX
 */
function App() {
  /* Page Theme State */
  const [themeState, setThemeState] = React.useState(() => {
    const saved = localStorage.getItem('themeState');
    console.log('saved' + saved);
    if (saved == 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  });
  // Function for changing theme state
  const changeThemeState = (newState) => {
    if (themeState !== newState) {
      setThemeState(newState);
    }
  };

  // Sets local storage of theme state, nessecary to retain state across pages
  useEffect(() => {
    window.localStorage.setItem('themeState', themeState);
  }, [themeState]);


  /* Set current theme according to theme state */
  const currentTheme = themeState === 'dark'? createTheme(darkTheme) :
    createTheme(lightTheme);

  /* Override 'anti-flashbang' root styling override in index.html */
  if (themeState === 'dark') {
    document.body.style = 'background: 121212;';
  } else {
    document.body.style = 'background: faf4ec;';
  }

  return (
      <ThemeProvider theme = {currentTheme}>
        <CssBaseline /> {/* For Background Color */}
        <ThemeStateContext.Provider value = {{themeState, changeThemeState}}>
          <BrowserRouter>
            <Suspense fallback = {null}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Projects" exact element={<Projects />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeStateContext.Provider>
      </ThemeProvider>
  );
};

export default App;
