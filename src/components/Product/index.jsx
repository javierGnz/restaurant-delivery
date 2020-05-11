import React from "react";
import "./style.scss";

const Product = () => {
  return (
    <div className="card card--product">
      <div className="card-body card-body--product">
        <div className="product">
          <div className="product__content">
            <div className="product__info">
              <h6>title</h6>
              <p>finas láminas de salmón bañadas en leche de tigre al ají amarillo, ají limo y rocoto.</p>
            </div>
            <div className="product__price">
              <span>$8.0000</span>
              <span>$8.0000</span>
            </div>
          </div>
          <div className="product__img">
            <img
              className="img-fluid"
              src="https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp"
              alt="hola"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
