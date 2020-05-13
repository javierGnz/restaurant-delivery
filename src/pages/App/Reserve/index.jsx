import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Reserve = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="wrapper__title">Hacer una reserva</h1>
            <div className="form-group">
              <label htmlFor="local">Local</label>
              <Select options={options} />
            </div>
            <div className="form-group">
              <label htmlFor="many-people">Para cuantas personas</label>
              <input type="text" className="form-control" id="many-people" />
            </div>
            <div className="form-group">
              <label>Para cuando</label>
              <div className="row">
                <div className="col-6">
                  <Select options={options} />
                </div>
                <div className="col-6">
                  <Select options={options} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Tu nombre</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tu email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Tu teléfono</label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <button className="btn btn--red">Crear reserva</button>
            <hr />
            <div>¡Gracias por reservar!</div>
            <div>Te llamaremos si hay algún problema</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
