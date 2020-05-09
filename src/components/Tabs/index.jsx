import React from 'react'
import { Link } from "react-router-dom";
import "./styles.scss";

const Tabs = ({ tabs }) => {
  return (
    <div className="tabs">
        <div className="container">
          <ul className="tabs__list">
            {tabs.map(({ id, name, path }) => {
              return (
                <li key={id} className="tabs__item">
                  <Link className="tabs__link" to={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  )
}

export default Tabs