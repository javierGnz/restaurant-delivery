import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Site from './pages/Site';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Admin />
    </Router>
  );
}

export default App;
