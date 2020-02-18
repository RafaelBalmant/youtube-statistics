import React from 'react';
import './App.css';
import Routes from './routes/Router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LeftMenu from "./components/UI/Menu/Left";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

function App() {
  return (
    <div className="d-flex h-100">
      <LeftMenu/>
      <div id="route">
        <Router>
          <Routes/>
        </Router>
      </div>
    </div>
  );
}

export default App;
