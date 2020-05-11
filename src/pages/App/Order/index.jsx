import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import Products from "./Products";
import Ordening from '../../../components/Ordening';
import "./styles.scss";

const products = [
  { id: 1, title: "title"},
  { id: 2, title: "food"},
  { id: 3, title: "asian"},
  { id: 4, title: "mexican"},
  { id: 5, title: "france"},
  { id: 6, title: "glace"},
];

const Order = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = ({ id }) => {
    console.log(id);
    setShow(true);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 order-lg-last">
            <Ordening />
            <h4>mi pedido</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia itaque cum, enim ipsam porro autem sequi dolor incidunt id minima accusamus, voluptatem, mollitia iure quibusdam soluta quas reiciendis totam!</p>
          </div>
          <div className="col-12 col-lg-8">
            <div className="products">
            <div className="search-bar">
              <p>Search bar</p>
            </div>
            {products.map(({ id, title }) => {
              return(
                <Products key={id} title={title} openModal={() => handleShow(id)} />
              );
            })}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Order;
