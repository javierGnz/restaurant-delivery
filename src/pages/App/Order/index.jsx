import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Products from "./Products";
import OrdeningOptions from "../../../components/OrdeningOptions";
import Cart from '../../../components/Cart';
import ProductModal from "../../../components/ProductModal";
import "./styles.scss";

const data = [
  { id: 1, title: "recomendados", products: [
    { id: 1, title: "pasta", description: "Lorem ipsum dolor  adipisicing elit", price: "2000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "arroz", description: "Dolor sit amet consectetur adipisicing elit", price: "3000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
  { id: 2, title: "food", products: [
    { id: 1, title: "porotos", description: "Consectetur adipisicing elit", price: "4000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "bistec", description: "Lorem amet consectetur adipisicing elit", price: "5600", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
  { id: 2, title: "food", products: [
    { id: 1, title: "porotos", description: "Consectetur adipisicing elit", price: "4000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "bistec", description: "Lorem amet consectetur adipisicing elit", price: "5600", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
  { id: 2, title: "food", products: [
    { id: 1, title: "porotos", description: "Consectetur adipisicing elit", price: "4000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "bistec", description: "Lorem amet consectetur adipisicing elit", price: "5600", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
  { id: 2, title: "food", products: [
    { id: 1, title: "porotos", description: "Consectetur adipisicing elit", price: "4000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "bistec", description: "Lorem amet consectetur adipisicing elit", price: "5600", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
  { id: 2, title: "food", products: [
    { id: 1, title: "porotos", description: "Consectetur adipisicing elit", price: "4000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "bistec", description: "Lorem amet consectetur adipisicing elit", price: "5600", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
  { id: 2, title: "food", products: [
    { id: 1, title: "porotos", description: "Consectetur adipisicing elit", price: "4000", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" },
    { id: 2, title: "bistec", description: "Lorem amet consectetur adipisicing elit", price: "5600", img: "https://tofuu.getjusto.com/orioneat-prod-resized/3fcHMCSSpkzPGjsNQ-320-320.webp" }
  ]},
];

const Order = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = ({ id }) => {
    console.log(id);
    setShow(true);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 order-lg-last">
            <div className="purchase">
              <OrdeningOptions />
              <Cart />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="categories">
              <div className="search-bar">
                <p>Search bar</p>
              </div>
              {data.map(({ id, title, products }) => {
                return (
                  <Products
                    key={id}
                    title={title}
                    products={products}
                    openModal={() => handleShow(id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <ProductModal />
      </Modal>
    </div>
  );
};

export default Order;
