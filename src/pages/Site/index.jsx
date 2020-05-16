import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Settings from "./Settings";
import Orders from "./Orders";
import Order from "./Order";
import Checkout from "./Checkout";
import Track from "./Track";
import Reserve from "./Reserve";
import Dispatch from "./Dispatch";
import NotFound from "./NotFound";

const Site = () => {
  return (
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
  );
};

export default Site;
