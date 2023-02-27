const darkTheme = {
  palette: {
    type: 'light',
    primary: {
      // less deep purple
      main: '#42394b',
      // clean white
      contrastText: '#fff',
    },
    secondary: {
      // cream white
      main: '#faf4ec',
      // deep purple
      contrastText: '#31293b',
    },
    tertiary: {
      // yellow
      main: '#fbe49b',
      // clean white
      contrastText: '#fff',
    },
    background: {
      default: '#faf4ec',
    },
    quaternary: {
      // turqoise
      main: '#3a6860',
      contrastText: '#fff',
    },
  },
  typography: {
    // Main name
    h2: {
      fontSize: 55,
    },
    // Box headers
    h3: {
      fontSize: 30,
    },
    // Buttons
    h6: {
      fontSize: 16,
      fontWeight: 600,

    },
    // "Hello There"
    p1: {
      fontSize: 50,
      fontWeight: 10,

    },
    // Greeting text
    p2: {
      fontSize: 30,
      fontWeight: 10,

    },
    // Normal Text
    p3: {
      fontSize: 20,
    },
    // Tiny Text
    p4: {
      fontSize: 16,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1030,
      lg: 1200,
      // kind of hack-ey way to break experience
      experiencebr: 1430,
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
// https://www.color-hex.com/color-palette/1022622
const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      // less deep purple
      main: '#42394b',
      // clean white
      contrastText: '#fff',
    },
    secondary: {
      // cream white
      main: '#faf4ec',
      // deep purple
      contrastText: '#31293b',
    },
    tertiary: {
      // yellow
      main: '#fbe49b',
      // clean white
      contrastText: '#fff',
    },
    background: {
      default: '#faf4ec',
    },
    quaternary: {
      // turqoise
      main: '#3a6860',
      contrastText: '#fff',
    },
  },
  typography: {
    // Main name
    h2: {
      fontSize: 55,
    },
    // Box headers
    h3: {
      fontSize: 30,
    },
    // Buttons
    h6: {
      fontSize: 16,
      fontWeight: 600,

    },
    // "Hello There"
    p1: {
      fontSize: 50,
      fontWeight: 10,

    },
    // Greeting text
    p2: {
      fontSize: 30,
      fontWeight: 10,

    },
    // Normal Text
    p3: {
      fontSize: 20,
    },
    // Tiny Text
    p4: {
      fontSize: 16,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1030,
      lg: 1200,
      // kind of hack-ey way to break experience
      experiencebr: 1430,
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
