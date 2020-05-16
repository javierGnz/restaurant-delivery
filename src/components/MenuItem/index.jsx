import React from 'react'
import {Link} from 'react-router-dom';
import { MdLocalPostOffice } from "react-icons/md";
import "./styles.scss";

const MenuItem = ({ title, icon, path }) => {
  return (
    <div className="menu-item">
      <div className="menu-item__title">
        <MdLocalPostOffice />
        <span>Ventas</span>
      </div>
      <div className="menu-item__list">
        <Link to="/" className="menu-item__link">Usuarios</Link>
        <Link to="/" className="menu-item__link">Pedidos</Link>
        <Link to="/" className="menu-item__link">Cupones</Link>
      </div>
    </div>
  )
}

export default MenuItem
