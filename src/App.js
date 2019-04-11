import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import Navigation from './Nav';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navigation />
      </div>
    </HashRouter>
  )
}

export default App;
