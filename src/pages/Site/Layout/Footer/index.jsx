import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer__logo">
                <img src="https://tofuu.getjusto.com/orioneat-prod-resized/299LL3FPGg6NF4wsh-200-undefined.webp" alt="Logo"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Conócenos</h5>
              <ul className="list-unstyled">
                <li><a className="footer__link" target="blank" href="#top">Zona</a></li>
                <li><a className="footer__link" target="blank" href="#top">Contacto</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Redes sociales</h5>
              <ul className="list-unstyled">
                <li><a className="footer__link" target="blank" href="#top">Instagram</a></li>
                <li><a className="footer__link" target="blank" href="#top">Facebook</a></li>
                <li><a className="footer__link" target="blank" href="#top">Twitter</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Mi cuenta</h5>
              <ul className="list-unstyled">
                <li><Link className="footer__link" to="/pedir">Pedir</Link></li>
                <li><Link className="footer__link" to="/pedidos">Mis pedidos</Link></li>
                <li><Link className="footer__link" to="/settings/addresses">Mis direcciones</Link></li>
                <li><Link className="footer__link" to="/settings/security">Cambiar contraseña</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
