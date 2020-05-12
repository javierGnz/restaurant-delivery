import React from "react";
import "./styles.scss";

const Cart = () => {
  return (
    <div className="cart">
      <h4>Mi Pedido</h4>
      <div className="cart__empty">
        <span>Cuando agregues productos se verán aquí</span>
      </div>
    </div>
  );
};

export default Cart;
