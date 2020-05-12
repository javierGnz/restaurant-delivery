import React, { Component } from "react";
import OrdeningOptions from '../OrdeningOptions';
import "./styles.scss";

export class Ordening extends Component {
  render() {
    return (
      <div
        className="ordening"
        style={{ backgroundImage: "url(https://tofuu.getjusto.com/orioneat-prod-resized/8RghfCjsRp2JwZYQ2-1400-2800.webp)" }}
      >
        <div className="ordening__wrapper">
          <h1 className="ordening__title">Pide ahora a Rocoto</h1>
          <div className="ordening__content">
            <OrdeningOptions />
            <button className="btn btn--outline">Pedir</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ordening;
