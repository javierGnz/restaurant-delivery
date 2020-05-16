import React from "react";
import "./styles.scss";

const Status = () => {
  return (
    <div className="status">
      <div className="status__item">
        <div className="status__step">1</div>
        <div className="status__description">
          <h4>Pedido confirmado</h4>
        </div>
      </div>
      <div className="status__item">
        <div className="status__step">2</div>
        <div className="status__description">
          <h4>Preparando pedido</h4>
          <small>Tiempo estimado 30m - 40m</small>
        </div>
      </div>
    </div>
  );
};

export default Status;
