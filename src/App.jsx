import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Body from './components/Body';

function App() {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
    spacing: [0, 4, 8, 16, 24, 40],
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box padding={2}>
        <Body />
      </Box>
    </ThemeProvider>
  );
}

export default App;
