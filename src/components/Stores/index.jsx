import React from "react";
import Tooltip from "rc-tooltip";
import { MdPhone, MdDirections } from "react-icons/md";
import "./styles.scss";

const handleAddress = () => {
  console.log('click !')
}

const Stores = ({ stores }) => {
  return (
    <>
      {stores.map(({ id, title, img, tel, address }) => {
        return (
          <div key={id} className="col-lg-3 col-md-6">
            <div className="card">
              <img className="card-img-top" src={img} alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ul className="list-unstyled">
                  <li>
                    <Tooltip
                      placement="top"
                      overlay={"Llamar"}
                      destroyTooltipOnHide={false}
                    >
                     <span className="card__link">
                       <MdPhone /> <a href={`tel: ${tel}`}>{tel}</a>
                      </span>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip
                      placement="top"
                      overlay={"Abrir en Google Maps"}
                      destroyTooltipOnHide={false}
                      mouseLeaveDelay={0}
                    >
                      <span className="card__link" onClick={handleAddress}>
                        <MdDirections /> <span>{address}</span>
                      </span>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stores;
