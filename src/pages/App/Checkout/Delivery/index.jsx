import React from "react";
import Select from "react-select";
import "./styles.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__item">
        <div className="form-group">
          <label htmlFor="">Tu dirección</label>
          <Select options={options} />
        </div>
        <div className="form-group">
          <label htmlFor="">Departamento, block, etc</label>
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn--red">Confirmar</button>
        {/* <small className="text-black-50">Entrega en</small>
        <h5>Blest Gana 6627</h5>
        <small className="text-black-50">1309</small>
        <button className="btn btn--none">Cambiar dirrecion o agregar instrucciones</button> */}
      </div>
      <div className="delivery__item">
        {/* <h5>50-65 min</h5>
        <small className="text-black-50">
          Leggada estimada - Lo antes posible
        </small>
        <button className="btn btn--none">Editar</button> */}
        <div className="form-group">
          <label htmlFor="">Cuándo quieres tu pedido</label>
          <div className="d-block">
            <button className="btn btn--white mr-3">Entregar ahora</button>
            <button className="btn btn--white">Programar para más tarde</button>
          </div>
        </div>
      </div>
      <div className="delivery__item">
        <small className="text-black-50">Tipo de entrega</small>
        {/* <h5> Dejar el paquete en conserjeria</h5>
        <button className="btn btn--none">Editar</button> */}
      </div>
    </div>
  );
};

export default Delivery;
