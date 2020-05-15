import React from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";
import { MdHealing } from "react-icons/md";
import Product from "../../../components/Product";
import PersonalInformation from "./PersonalInformation";
import CartItem from "../../../components/CartItem";
import Summary from "../../../components/Summary";
import "./styles.scss";
import MessageCard from "../../../components/MessageCard";

const data = [
  {
    id: 1,
    title: "pollo",
    description: "trosos de pollo para apañarte en tu bajon amigo mio",
    price: 4000,
    img:
      "https://tofuu.getjusto.com/orioneat-prod-resized/HDMD84XnNdCo7KjvT-320-320.webp",
  },
  {
    id: 1,
    title: "arroz chaufa",
    description: "Sit odit repellat molestias atque suscipit amet",
    price: 4000,
    img:
      "https://tofuu.getjusto.com/orioneat-prod-resized/sBGRymLKPLoavDz4v-320-320.webp",
  },
  {
    id: 1,
    title: "papas fritas",
    description:
      "Possimus recusandae, obcaecati reprehenderit accusamus eius dolorum amet!",
    price: 4000,
    img:
      "https://tofuu.getjusto.com/orioneat-prod-resized/6m6aqPy9JKfu3bhLJ-320-320.webp",
  },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Checkout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="wrapper__title">¿Quieres agregar algo más?</h1>
            <div className="adding-more">
              {data.map(({ id, title, description, price, img }) => {
                return (
                  <Product
                    key={id}
                    title={title}
                    description={description}
                    price={price}
                    img={img}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <h1 className="wrapper__title wrapper__title--underline">
              Entrega
            </h1>
            <Select options={options} />
          </div>
          <div className="col-lg-5 col-md-6">
            <h1 className="wrapper__title wrapper__title--underline">
              Información personal
            </h1>
            <PersonalInformation />
            <div className="wrapper__title wrapper__title--underline d-flex justify-content-between align-items-baseline">
              <span>Resumen</span>
              <button className="btn btn--none">Agregar más articulos</button>
            </div>
            <div className="cart-wrapper">
              <CartItem />
            </div>
            <Summary />
            <MessageCard
              icon={<MdHealing />}
              title="Prevención ante Covid-19"
              description="Prefiere usar medios de pago digitales para evitar"
            />
            <button className="btn btn--red btn-block">Confirmar pedido</button>
            <div className="text-center mt-3">
              <button className="btn btn--none">
                Agregar un codigo de descuento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
