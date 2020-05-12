import React from "react";
import Select from "react-select";
import { MdLocationOn, MdMotorcycle, MdRestaurant } from "react-icons/md";
import "./styles.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const OrdeningOptions = () => {
  return (
    <div className="ordening-type">
      <div className="ordening-type__options">
        <button className="btn btn--outline">
          <MdMotorcycle size={28} />
          <span>Delivery</span>
        </button>
        <button className="btn btn--outline">
          <MdLocationOn size={28} />
          <span>Para retirar</span>
        </button>
        {/* <button className="btn btn--outline">
          <MdRestaurant size={28} />
          <span>Reservar mesa</span>
        </button> */}
      </div>
      <div className="ordening-type__selection">
        <h6>Tu direccion</h6>
        <Select
          className="select-outline"
          classNamePrefix="select-outline"
          options={options}
        />
      </div>
    </div>
  );
};

export default OrdeningOptions;
