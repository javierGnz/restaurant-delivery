import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./pages/App/Layout";
import HomePage from "./pages/App/HomePage";
import "./App.scss";

function App() {
  return (
    <Layout>
      <h1>inside layout</h1>
      <Router>
        <Link to="/home">Home</Link>
        <Switch>
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
