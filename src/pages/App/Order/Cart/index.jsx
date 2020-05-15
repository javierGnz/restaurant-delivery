import React from 'react';
import CartItem from '../../../../components/CartItem';
import Summary from '../../../../components/Summary'
import "./styles.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__list">
        <CartItem />
      </div>
      <Summary />
      <div className="cart__action">
        <button className="btn btn--red">Continuar con mi pedido</button>
      </div>
      {/* <div className="cart__empty">
        <span>Cuando agregues productos se verán aquí</span>
      </div> */}
    </div>
  )
}

export default Cart
