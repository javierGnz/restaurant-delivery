import React, { Component } from "react";
import Section from "../../../../components/Section";

export class Comunication extends Component {
  render() {
    return (
      <Section
        title="Comunicaciones"
        description="Elige como quieres que nos comuniquemos contigo"
      >
        {/* TODO: implement a form */}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="by-email" />
          <label className="form-check-label" htmlFor="by-email">
            Dejar de recibir promociones y novedades por email
          </label>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="by-sms" />
          <label className="form-check-label" htmlFor="by-sms">
            Dejar de recibir promociones y novedades por SMS
          </label>
          <small id="emailHelp" className="form-text text-muted">
            Las notificaciones sobre tus pedidos las seguirás recibiendo
          </small>
        </div>
        <button className="btn btn--red">Guardar</button>
      </Section>
    );
  }
}

export default Comunication;
