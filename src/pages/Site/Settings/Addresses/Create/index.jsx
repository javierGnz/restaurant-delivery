import React from "react";
import Select from "react-select";
import Section from "../../../../../components/Section";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Create = () => {
  return (
    <Section
      title="Agregar una dirección a mi cuenta"
      description="Guarda esta dirección en tu cuenta para hacer pedidos"
    >
      {/* TODO: implement a form */}
      <div className="form-group">
        <label htmlFor="direccion">Dirección</label>
        <Select
          options={options}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Departamento, block, etc</label>
        <input
          type="text"
          className="form-control"
          id="number"
          placeholder="705"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="is-house" />
        <label class="form-check-label" htmlFor="is-house">
          Es una casa
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comentario (opcional)</label>
        <input
          type="text"
          className="form-control"
          id="comment"
          placeholder="Dejar la comida con el conserje"
        />
      </div>
      <button className="btn btn--red">Agregar dirección</button>
    </Section>
  );
};

export default Create;
