import React from "react";
import { MdClose } from 'react-icons/md';
import "./styles.scss";

const ProductModal = () => {
  return (
    <>
      <button className="modal-close">
        <MdClose size="20" />
      </button>
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <img
              className="product-modal__img"
              src="https://tofuu.getjusto.com/orioneat-prod-resized/GPEW96JypFBg69sFS-1200-1200.webp"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium porro eveniet sunt. Ullam expedita mollitia,
              voluptatibus eveniet inventore quis dignissimos ipsum ratione
              aliquam perspiciatis quasi assumenda corrupti similique ea sit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
