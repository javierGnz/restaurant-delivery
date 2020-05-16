import React from "react";
import { Route } from "react-router-dom";
import Tabs from "../../../components/Tabs";
import Profile from './Profile';
import Comunication from './Comunication';
import Payment from './Payment';
import Addresses from './Addresses';
import Security from './Security';
import "./styles.scss";

const settingsURLs = [
  { id: 1, name: "Perfil", path: "/settings" },
  { id: 2, name: "Comunicación", path: "/settings/communication" },
  { id: 3, name: "Pago", path: "/settings/payment" },
  { id: 4, name: "Mis direcciones", path: "/settings/addresses" },
];

const Settings = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="wrapper__title">Ajustes</h1>
      </div>
      <Tabs tabs={settingsURLs} />
      <>
        <Route exact path="/settings" component={Profile} />
        <Route path="/settings/communication" component={Comunication} />
        <Route path="/settings/payment" component={Payment} />
        <Route path="/settings/addresses" component={Addresses} />
        <Route path="/settings/security" component={Security} />
      </>
    </div>
  );
};

export default Settings;
