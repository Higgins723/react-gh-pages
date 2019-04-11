import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
      </div>
    </HashRouter>
  )
}

export default App;