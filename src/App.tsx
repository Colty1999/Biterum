import './App.scss'
import DarkMode from './modules/darkmode/DarkMode';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import Header from './layout/header/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <DarkMode />
      </Container>
    </ThemeProvider>
  )
}

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  }
});
