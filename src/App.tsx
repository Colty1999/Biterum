import './App.scss'
import DarkMode from './modules/darkmode/DarkMode';
import { Container } from '@mui/material';
import Header from './layout/header/Header';

export default function App() {
  return (
    <Container>
      <Header />
      <DarkMode />
    </Container>
  )
}


