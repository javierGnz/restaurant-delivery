import React, { Component } from "react";
import Select from "react-select";
import { MdLocationOn, MdMotorcycle, MdRestaurant } from "react-icons/md";
import "./styles.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export class Ordening extends Component {
  render() {
    return (
      <div
        className="ordening"
        style={{
          backgroundImage:
            "url(https://tofuu.getjusto.com/orioneat-prod-resized/8RghfCjsRp2JwZYQ2-1400-2800.webp)",
        }}
      >
        <div className="ordening__wrapper">
          <h1 className="ordening__title">Pide ahora a Rocoto</h1>
          <div className="ordening__content">
            <div className="ordening__type">
              <button className="btn btn--outline">
                <MdMotorcycle size={28} />
                <span>Delivery</span>
              </button>
              <button className="btn btn--outline">
                <MdLocationOn size={28} />
                <span>Para retirar</span>
              </button>
              <button className="btn btn--outline">
                <MdRestaurant size={28} />
                <span>Reservar mesa</span>
              </button>
            </div>
            <div className="ordening__selection">
              <h6>Tu direccion</h6>
              <Select
                className="select-outline"
                classNamePrefix="select-outline"
                options={options}
              />
            </div>
            <button className="btn btn--outline">Pedir</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ordening;
