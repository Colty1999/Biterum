import './App.scss'
import Header from './layout/header/Header';
import Home from './features/home/Home';
import Footer from './layout/footer/Footer';
import { Container } from '@mui/material';
import ParticlesBackground from './modules/Particles/Particles';


export default function App() {

  return (
    <Container>
      <ParticlesBackground />
      <Header />
      <Home />
      <Footer />
    </Container>
  )
}


