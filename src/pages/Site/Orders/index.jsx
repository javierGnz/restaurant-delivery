import React from "react";
import ProductOrder from "../../../components/ProductOrder";
import "./styles.scss";

const data = [
  {
    id: 1,
    img: "https://tofuu.getjusto.com/orioneat-prod-resized/HAAMcQByMDtATvQaB-320-320.webp",
    alt: "Water",
    price: 900,
    status: "Pendiente",
    description: "Lorem ipsum dolor",
    numOrder: 9372,
    date: "20 de marzo del 2020"
  },
  {
    id: 2,
    img: "https://tofuu.getjusto.com/orioneat-prod-resized/HAAMcQByMDtATvQaB-320-320.webp",
    alt: "Asian Food",
    price: 2000,
    status: "Retirado",
    description: "Lorem ipsum dolor",
    numOrder: 9187,
    date: "14 de abril del 2020"
  },
];

const Orders = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="wrapper__title">Mis pedidos</h1>
            <div className="orders">
              <div className="orders__list">
                {data.map(({ id, img, alt, price, status, description, numOrder, date }) => {
                  return (
                    <ProductOrder
                      key={id}
                      img={img}
                      alt={alt}
                      price={price}
                      status={status}
                      description={description}
                      numOrder={numOrder}
                      date={date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
