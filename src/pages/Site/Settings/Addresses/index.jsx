import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from './List';
import Create from './Create';
import Address from './Address';

export class Addresses extends Component {
  render() {
    return (
      <>
        <Route exact path="/settings/addresses" component={List} />
        <Route path="/settings/addresses/create" component={Create} />
        <Route path="/settings/addresses/:addressId" component={Address} />
      </>
    );
  }
}

export default Addresses;
