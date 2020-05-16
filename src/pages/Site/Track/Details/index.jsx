import React from "react";
import Summary from "../../../../components/Summary";
import "./styles.scss";

const Details = () => {
  return (
    <div className="details">
      <div className="details__item">
        <div className="details__product">
          <div className="details__product-mount">1</div>
          <div className="details__product-name">Arrollados Primavera Vietnamita Vegano</div>
          <div className="details__product-price">
            <span className="sale">$7.200</span>
            <span>$5.400</span>
          </div>
        </div>
      </div>
      <div className="details__item">
        <Summary />
      </div>
      <div className="details__item">
        <div className="details__resume">
          <span>Entrega</span>
          <span>08:30 pm</span>
        </div>
        <div className="details__resume">
          <span>Fecha de ingreso</span>
          <span>15 de mayo de 2020 12:39</span>
        </div>
        <div className="details__resume">
          <span>Tipo</span>
          <span>Web para llevar</span>
        </div>
        <div className="details__resume">
          <span>Medio de pago</span>
          <span>Paga en local</span>
        </div>
        <div className="details__resume">
          <span>Nombre</span>
          <span>javier gonzalez</span>
        </div>
        <div className="details__resume">
          <span>Teléfono</span>
          <span>+56977041659</span>
        </div>
      </div>
      <p className="text-center text-black-50">Orden #29995</p>
    </div>
  );
};

export default Details;
