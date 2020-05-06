import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { MdOpenInBrowser, MdSettings, MdShopTwo, MdExitToApp, MdStoreMallDirectory, MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./styles.scss";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  }

  render() {
    return (
      <div className="navbar">
        <Link className="navbar-brand" to="/">
          <img src="https://tofuu.getjusto.com/orioneat-prod-resized/299LL3FPGg6NF4wsh-200-undefined.webp" alt="Logo" />
        </Link>
        <div className="navbar__actions">
          <button className="btn" type="button" onClick={this.toggleMenu}>
            <span>Entrar</span>
            <MdOpenInBrowser size={20} />
          </button>
          <CSSTransition
            in={this.state.openMenu}
            timeout={300}
            classNames="fade"
            mountOnEnter
            unmountOnExit
          >
            <div className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link className="menu__link" to="/">
                    <h6>Name</h6>
                    <small>email</small>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/">
                    <MdShopTwo size={20} />
                    <span>Mis pedidos</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/">
                    <MdSettings size={20} />
                    <span>Mi cuenta</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/">
                    <MdAddCircleOutline size={20} />
                    <span>Admin</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/">
                    <MdStoreMallDirectory size={20} />
                    <span>Puntos de venta</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/">
                    <MdExitToApp size={20} />
                    <span>Salir</span>
                  </Link>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Header;
