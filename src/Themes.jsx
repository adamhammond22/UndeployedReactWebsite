const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#eb7134',
    },
  },
};
// https://www.color-hex.com/color-palette/1022622
const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#42394b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#faf4ec',
      contrastText: '#31293b',
    },
    tertiary: {
      main: '#fbe49b',
      contrastText: '#fff',
    },
    background: {
      default: '#faf4ec',
    },
  },
  typography: {
    h2: {
      fontSize: 55,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,

    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1030,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#42394b',
        },
      },
    },
  },
};

export {lightTheme};
export {darkTheme};
