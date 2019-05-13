import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <ParallaxProvider>
      <Home />
      <Projects />
      <Contact />
    </ParallaxProvider>
  )
}

export default App;