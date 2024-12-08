import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Container } from '@mui/material';

import Main from './Main';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
},
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className='App'>
        <Main/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
