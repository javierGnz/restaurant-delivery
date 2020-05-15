import React from "react";
import "./styles.scss";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <select className="custom-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="cart-item__description">
          <span>Tallartin Saltado 3 sabores</span>
        </div>
        <div className="cart-item__price">
          <span className="sale">8000</span>
          <span className="font-weight-bold">3000</span>
        </div>
      </div>
      <div className="cart-item__action">
        <span className="cart-item__delete">Eliminar</span>
      </div>
    </div>
  );
};

export default CartItem;
