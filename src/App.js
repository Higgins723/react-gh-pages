import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import Home from './components/Home';

const App = () => {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  )
}

export default App;