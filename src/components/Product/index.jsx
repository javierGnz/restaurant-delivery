import React from "react";
import "./style.scss";

const Product = ({ title, description, price, img }) => {
  return (
    <div className="card card--product">
      <div className="card-body card-body--product">
        <div className="product">
          <div className="product__content">
            <div className="product__info">
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
            <div className="product__price">
              <span className="sale">$8.0000</span>
              <span>{price}</span>
            </div>
          </div>
          <div className="product__img">
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
