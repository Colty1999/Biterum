import './App.scss'
import { Container } from '@mui/material';
import Header from './layout/header/Header';
import Home from './features/home/Home';

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  )
}


