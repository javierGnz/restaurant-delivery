import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import MenuItem from '../../../../components/MenuItem';
import "./styles.scss";

export class SidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  }

  render() {
    return (
      <div
        className={
          this.state.openMenu
            ? "sidebar-menu sidebar-menu--responsive"
            : "sidebar-menu"
        }
      >
        <div className="sidebar-menu__toggle">
          <button className="btn btn--none" onClick={this.handleToggleMenu}>
            {this.state.openMenu ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
        <div
          className={
            this.state.openMenu
              ? "sidebar-menu__wrapper active"
              : "sidebar-menu__wrapper"
          }
        >
          <div className="sidebar-menu__logo">
            <Link to="/">
              <img
                className="img-fluid"
                src="https://s3.amazonaws.com/orionjs-testing-filemanager/sodlab%2Fk7h43AmJ67dvJiKgP-TZFcWfNTmyGGsNEC2-Logo_trans-1.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="sidebar-menu__list">
            <MenuItem />
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarMenu;
