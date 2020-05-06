import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { MdOpenInBrowser } from "react-icons/md";
import { Link } from "react-router-dom";
import "./styles.scss";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  render() {
    return (
      <div className="navbar">
        <Link className="navbar-brand" to="/">
          <img src="" alt="Logo" />
        </Link>
        <div className="navbar__actions">
          <button
            className="btn"
            type="button"
            onClick={this.toggleMenu}
          >
            Entrar
            <MdOpenInBrowser />
          </button>
          <CSSTransition
            in={this.state.openMenu}
            timeout={300}
            classNames="opacity"
            mountOnEnter
            unmountOnExit
          >
            <div className="menu">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Header;
