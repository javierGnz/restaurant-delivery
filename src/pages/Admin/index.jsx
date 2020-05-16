import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  return (
    <div>
      Main content
    </div>
  );
};

const Admin = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Admin;
