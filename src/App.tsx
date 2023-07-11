import './App.scss'
import DarkMode from './modules/darkmode/DarkMode';
import { Container } from '@mui/material';
import Header from './layout/header/Header';
import Home from './features/home/Home';

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <DarkMode />
    </Container>
  )
}


