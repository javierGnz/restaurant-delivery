import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="not-found text-center">
              <h1 className="wrapper__title mb-4">Esta página no existe</h1>
              <Link className="btn btn--white" to="/">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
