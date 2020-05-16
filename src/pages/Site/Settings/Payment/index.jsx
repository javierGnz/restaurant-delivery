import React, { Component } from 'react'
import { MdLock } from 'react-icons/md';
import Section from "../../../../components/Section";

export class Payment extends Component {
  render() {
    return (
      <Section
        title="Mis tarjetas guardadas"
        description="Puedes guardar tu tarjeta de crédito para pagar más rápido. Tu tarjeta se guarda de una forma segura"
      >
        <button className="btn btn--red"><MdLock /> Guardar una tarjeta</button>
      </Section>
    )
  }
}

export default Payment
