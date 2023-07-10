import react from 'react'
import './App.scss'
import DarkMode from './modules/DarkMode';
import { Container, ThemeProvider, createTheme } from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <DarkMode />
      </Container>
    </ThemeProvider>
  )
}

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  }
});
