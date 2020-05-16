import React, { Component } from "react";
import Section from "../../../../components/Section";

export class Profile extends Component {
  render() {
    return (
      <Section title="Perfil" description="Actualiza tu información personal">
        {/* TODO: implement a form */}
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Tu nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            placeholder="Tu apellido"
          />
        </div>
        <button className="btn btn--red">Guardar</button>
      </Section>
    );
  }
}

export default Profile;
