import './App.scss'
import Header from './layout/header/Header';
import Home from './features/home/Home';
import Footer from './layout/footer/Footer';
import { Container } from '@mui/material';
import ParticlesBackground from './modules/Particles/Particles';
import { useState } from 'react';
import { Context } from './assets/Consts';


export default function App() {
  const [theme, setTheme] = useState<string>((localStorage.getItem("themeKey") ?? document.documentElement.getAttribute('data-theme')) ?? 'light')

  return (
    <Container>
      <Context.Provider value={{theme: theme,setTheme: setTheme}}>
      <ParticlesBackground />
      <Header />
      <Home />
      <Footer />
      </Context.Provider>
    </Container>
  )
}


