import React, { Component } from 'react'
import Section from "../../../../components/Section";

export class Payment extends Component {
  render() {
    return (
      <Section
        title="Pagos"
        description="Puedes guardar tu tarjeta de crédito para pagar más rápido. Tu tarjeta se guarda de una forma segura"
      >
        <button className="btn btn-primary">Guardar una tarjeta</button>
      </Section>
    )
  }
}

export default Payment
