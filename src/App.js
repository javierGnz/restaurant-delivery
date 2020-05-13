import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./pages/App/Layout";
import HomePage from "./pages/App/HomePage";
import Settings from "./pages/App/Settings";
import Orders from "./pages/App/Orders";
import Order from "./pages/App/Order";
import Checkout from "./pages/App/Checkout";
import Track from "./pages/App/Track";
import Reserve from "./pages/App/Reserve";
import Dispatch from "./pages/App/Dispatch";
import NotFound from "./pages/App/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/settings" component={Settings} />
          <Route path="/pedidos" component={Orders} />
          <Route path="/pedir" component={Order} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/track" component={Track} />
          <Route path="/reservar" component={Reserve} />
          <Route path="/despacho" component={Dispatch} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
