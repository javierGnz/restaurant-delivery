import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/reservar">reservar</Link></li>
        <li><Link to="/pedidos">pedidos</Link></li>
        <li><Link to="/checkout">checkout</Link></li>
        <li><Link to="/track">track</Link></li>
      </ul>
    </div>
  )
}

export default HomePage
