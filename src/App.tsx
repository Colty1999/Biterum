import './App.scss'
import { Container } from '@mui/material';
import Header from './layout/header/Header';
import Home from './features/home/Home';
import Footer from './layout/footer/Footer';

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer/>
    </Container>
  )
}


