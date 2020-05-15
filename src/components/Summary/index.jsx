import React from "react";
import "./styles.scss";

const Summary = () => {
  return (
    <div className="summary">
      <div className="summary__item">
        <span>Subtotal</span>
        <span>10200</span>
      </div>
      <div className="summary__item">
        <span>Descuento</span>
        <span>-2550</span>
      </div>
      <div className="summary__item summary__item--highlight">
        <span>Total</span>
        <span>7650</span>
      </div>
    </div>
  );
};

export default Summary;
