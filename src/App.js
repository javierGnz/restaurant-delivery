import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Layout from "./pages/App/Layout";
import HomePage from "./pages/App/HomePage";

function App() {
  return (
    <Router>
    <Layout>
      <h1>inside layout</h1>
      
        <Link to="/home">Home</Link>
        <Switch>
          <Route path="/home" component={HomePage} />
        </Switch>
    </Layout>
    </Router>
  );
}

export default App;
