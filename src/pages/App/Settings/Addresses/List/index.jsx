import React from "react";
import { Link } from "react-router-dom";
import AddressCard from "../../../../../components/AddressCard";
import "./styles.scss";

const data = [
  { id: 1, path: "/", main: "Blest gana 6627", second: "La Reina, Chile" },
  { id: 2, path: "/", main: "Claudio Arrau 6821", second: "Pudahuel, Chile" },
];

const List = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="addresses">
            <div className="addresses__list">
              {data.map(({ id, path, main, second }) => {
                return (
                  <AddressCard
                    key={id}
                    path={path}
                    mainAdrress={main}
                    secondAddress={second}
                  />
                );
              })}
            </div>
          </div>
          <Link className="btn btn--white" to="/settings/addresses/create">
            Agregar dirección
          </Link>
        </div>
      </div>
    </div>
  );
};

export default List;
