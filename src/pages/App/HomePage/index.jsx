import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../components/Carousel";
import Category from "../../../components/Category";
import Stores from "../../../components/Stores";
import "./styles.scss";

const nuestraCarta = [
  { id: 1, img: "https://tofuu.getjusto.com/orioneat-prod-resized/nRrsAavLynLbzmpAh-500-700.webp", name: "Entradas" },
  { id: 2, img: "https://tofuu.getjusto.com/orioneat-prod-resized/dXrxW8wgLGKrPwd85-500-700.webp", name: "Fondos" },
  { id: 3, img: "https://tofuu.getjusto.com/orioneat-prod-resized/7Sg4zGt2PzLMKrebK-500-700.webp", name: "Platos" }
];

export class HomePage extends Component {
  render() {
    return (
      <>
        <Carousel />
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 offset-sm-1">
                <img
                  className="img-fluid mx-auto"
                  src="https://s3.amazonaws.com/orion-eat-app-files/orioneat-prod/2Y5p66TFZnkPwonWr-9años%20Logo.png"
                  alt="IMG"
                />
              </div>
              <div className="col-sm-5">
                <h1 className="subtitle text-center mb-5">Title</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore libero cupiditate nesciunt adipisci laborum corporis
                  est commodi, cumque rerum non sapiente deserunt animi corrupti
                  sed odio ex magni nulla voluptatem.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore libero cupiditate nesciunt adipisci laborum corporis
                  est commodi, cumque rerum non sapiente deserunt animi corrupti
                  sed odio ex magni nulla voluptatem.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore libero cupiditate nesciunt adipisci laborum corporis
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore libero cupiditate nesciunt adipisci laborum corporis
                  est commodi, cumque rerum non sapiente deserunt animi corrupti
                  sed odio ex magni nulla voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="start-ordening"
          style={{
            backgroundImage:
              "url(https://tofuu.getjusto.com/orioneat-prod-resized/8RghfCjsRp2JwZYQ2-1400-2800.webp)",
          }}
        >
          <div className="start-ordening__content">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores labore alias ab deleniti cupiditate quasi quo, iste
              eveniet delectus fugit placeat mollitia, quod saepe nostrum atque
              nesciunt eos repellat tenetur.
            </p>
          </div>
        </div>
        <div className="pt-5 pb-3">
          <div className="container">
            <h1 className="subtitle text-center mb-5">Nuestra carta</h1>
            <div className="row justify-content-center">
              <Category categories={nuestraCarta} />
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <h1 className="subtitle mb-5 text-center">Sucursales</h1>
            <div className="row justify-content-center">
              <Stores />
            </div>
          </div>
        </div>
        <hr />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/reservar">reservar</Link>
          </li>
          <li>
            <Link to="/pedidos">pedidos</Link>
          </li>
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
          <li>
            <Link to="/track">track</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default HomePage;
