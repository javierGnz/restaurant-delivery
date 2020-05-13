import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const AddressCard = ({ id, path, mainAdrress, secondAddress }) => {
  return (
    <Link to={path} className="card card--address">
      <div className="card-body">
        <h6>{mainAdrress}</h6>
        <small>{secondAddress}</small>
      </div>
    </Link>
  );
};

export default AddressCard;
