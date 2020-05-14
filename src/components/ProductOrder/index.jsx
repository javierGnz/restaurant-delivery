import React from "react";
import "./styles.scss";

const ProductOrder = ({
  img,
  alt,
  price,
  status,
  description,
  numOrder,
  date,
}) => {
  return (
    <div className="card card--order">
      <div className="card-body card-body--order">
        <div className="product-order">
          <div className="product-order__img">
            <img src={img} alt={alt} />
          </div>
          <div className="product-order__content">
            <div className="product-order__info">
              <div className="product-order__state">
                <h5>{price}</h5>
                <span className="text-black-50">{status}</span>
              </div>
              <p className="text-black-50">{description}</p>
            </div>
            <div className="product-order__footer">
              <span>Pedido #{numOrder}</span>
              <span className="text-black-50">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
