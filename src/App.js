import React from 'react';
import './App.css';
import Routes from './routes/Router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/UI/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
