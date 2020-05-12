import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdPhone, MdDirections } from "react-icons/md";
import "./styles.scss";

const handleAddress = () => {
  console.log("click !");
};

const Stores = ({ stores }) => {
  return (
    <>
      {stores.map(({ id, title, img, tel, address }) => {
        return (
          <div key={id} className="col-lg-3 col-md-6">
            <div className="card card--addresses">
              <img className="card-img-top" src={img} alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ul className="list-unstyled">
                  <li>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="call">Llamar</Tooltip>}
                    >
                      <span className="card__link">
                        <MdPhone /> <a href={`tel: ${tel}`}>{tel}</a>
                      </span>
                    </OverlayTrigger>
                  </li>
                  <li>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="map">Abrir en Google Maps</Tooltip>}
                    >
                      <span className="card__link" onClick={handleAddress}>
                        <MdDirections /> <span>{address}</span>
                      </span>
                    </OverlayTrigger>
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
