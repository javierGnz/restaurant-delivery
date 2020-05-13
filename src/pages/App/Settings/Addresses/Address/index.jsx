import React from "react";
import Select from "react-select";
import Section from "../../../../../components/Section";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Address = () => {
  return (
    <Section
      title="Editar dirección"
      description="Edita la dirección"
    >
      {/* TODO: implement a form */}
      <div className="form-group">
        <label htmlFor="direccion">Dirección</label>
        <Select options={options} />
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
      <div className="btn-toolbar">
        <button className="btn btn--white">Volver</button>
        <button className="btn btn--red">Eliminar dirección</button>
        <button className="btn btn--red">Guardar</button>
      </div>
    </Section>
  );
};

export default Address;
