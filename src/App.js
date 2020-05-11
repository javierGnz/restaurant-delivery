import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Layout from "./pages/App/Layout";
import HomePage from "./pages/App/HomePage";
import Checkout from "./pages/App/Checkout";
import NotFound from "./pages/App/NotFound";
import Order from "./pages/App/Order";
import Orders from "./pages/App/Orders";
import Reserve from "./pages/App/Reserve";
import Settings from "./pages/App/Settings";
import Track from "./pages/App/Track";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/settings" component={Settings} />
          <Route path="/pedir" component={Order} />
          <Route path="/pedidos" component={Orders} />
          <Route path="/reservar" component={Reserve} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/track" component={Track} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
