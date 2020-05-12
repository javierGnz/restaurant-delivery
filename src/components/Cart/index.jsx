import React from "react";
import "./styles.scss";

const Cart = () => {
  return (
    <div className="cart">
      <h6 className="cart__title">Mi Pedido</h6>
      <div className="cart__container">
        <div className="cart__item">
          <div className="cart__product">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <span>Tallartin Saltado 3 sabores</span>
            <div className="cart__price">
              <span>8000</span>
              <span>3000</span>
            </div>
          </div>
          <div className="cart__actions">
            <button className="btn">Eliminar</button>
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__product">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <span>Tallartin Saltado 3 sabores</span>
            <div className="cart__price">
              <span>8000</span>
              <span>3000</span>
            </div>
          </div>
          <div className="cart__actions">
            <button className="btn">Eliminar</button>
          </div>
        </div>
      </div>
      <div className="cart__summary">
        <div className="cart__subtotal">
          <span>subtotal</span>
          <span>$6000</span>
        </div>
        <div className="cart__descuento">
          <span>descuento</span><span>-1000</span>
        </div>
        <div className="cart__total">
          <span>total</span><span>5000</span>
        </div>
        <div className="cart__continue">
          <button className="btn">Continuar con mi pedido</button>
        </div>
      </div>
      {/* <div className="cart__empty">
        <span>Cuando agregues productos se verán aquí</span>
      </div> */}
    </div>
  );
};

export default Cart;
