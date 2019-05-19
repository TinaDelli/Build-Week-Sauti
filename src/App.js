import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <Router>
    <div className="App">
    <nav>
      <h1 className="logo-style">Sauti<span>.</span>Studio</h1>
      <div className="nav-links">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/projects">
        Projects
        </NavLink>
      </div>
    </nav>
    <Route exact path="/" component={Home} />
    <Route path= "/dashboard" component={Dashboard} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    </div>
    </Router>
  );
}

export default App;
