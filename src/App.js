import React from 'react';
import './App.css';
import Routes from './routes/Router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
