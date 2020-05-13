import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../components/Carousel";
import Ordening from "../../../components/Ordening";
import Category from "../../../components/Category";
import SocialPosts from "../../../components/SocialPosts";
import Stores from "../../../components/Stores";
import "./styles.scss";

const slider = [
  { id: 1, img: "https://tofuu.getjusto.com/orioneat-prod-resized/h2kwA2eWa6SuZzt52-undefined-2800.webp", alt: "Lorem" },
  { id: 2, img: "https://tofuu.getjusto.com/orioneat-prod-resized/DTF7RRpe6ZFcEGZXb-x-2800.webp", alt: "Description" },
  { id: 3, img: "https://tofuu.getjusto.com/orioneat-prod-resized/F8ADmFN7F3S9ofDxy-undefined-2800.webp", alt: "Registrate" }
];

const info = {
  id: 1,
  title: "Rocoto",
  img: "https://s3.amazonaws.com/orion-eat-app-files/orioneat-prod/2Y5p66TFZnkPwonWr-9años%20Logo.png",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore libero cupiditate nesciunt adipisci laborum corporis est commodi, cumque rerum non sapiente deserunt animi corrupti sed odio ex magni nulla voluptatem."
}

const nuestraCarta = [
  { id: 1, img: "https://tofuu.getjusto.com/orioneat-prod-resized/nRrsAavLynLbzmpAh-500-700.webp", name: "Entradas" },
  { id: 2, img: "https://tofuu.getjusto.com/orioneat-prod-resized/dXrxW8wgLGKrPwd85-500-700.webp", name: "Fondos" },
  { id: 3, img: "https://tofuu.getjusto.com/orioneat-prod-resized/7Sg4zGt2PzLMKrebK-500-700.webp", name: "Platos" }
];

const socialposts = [
  { id: 1, img: "https://instagram.fscl6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/96249960_243474466872678_5980025227111427736_n.jpg?_nc_ht=instagram.fscl6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Bih8JvI2j3cAX_SJlxr&oh=9d02dc7f5896c7e6b24694b54c5c3c8b&oe=5EDC2546", link: "https://www.instagram.com/p/B_5pWPYnWhD/", alt: "Lorem" },
  { id: 2, img: "https://instagram.fscl6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.719.719a/s640x640/95816222_272223687501818_9015786842077894390_n.jpg?_nc_ht=instagram.fscl6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=dVxkK3gw768AX9DS9SS&oh=6021c4aaf74bd4ac63d587ee4ce5fabb&oe=5EDFBB35", link: "https://www.instagram.com/p/B_3Taz1HYzX/", alt: "Ipsum" },
  { id: 3, img: "https://instagram.fscl6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/95537380_2870796852974436_4552234918774182921_n.jpg?_nc_ht=instagram.fscl6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=43qGd4UKZ60AX9Hx7wn&oh=1d35772a763b8ac40be794c44b1fd0b3&oe=5EDE7946", link: "https://www.instagram.com/p/B_xa9-2HAH4/", alt: "Dolor" }
];

const locales = [
  { id: 1, title: "Vitacura", img: "https://tofuu.getjusto.com/orioneat-prod-resized/caxYCaeTsEmAS2yZv-300-500.webp", tel: "226082739", address: "Partenón 1727"},
  { id: 2, title: "Las Condes", img: "https://tofuu.getjusto.com/orioneat-prod-resized/dudFmBa7doeERA4FJ-300-500.webp", tel: "222746071", address: "Avenida Pedro de Valdivia 2573"},
  { id: 3, title: "Santiago", img: "https://tofuu.getjusto.com/orioneat-prod-resized/oSpb4bykkxE3keove-300-500.webp", tel: "222223757", address: "Roberto Espinoza 1213"}
];

export class HomePage extends Component {
  render() {
    return (
      <>
        <Carousel data={slider} />
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 offset-sm-1 col-8 offset-2">
                <img
                  className="img-fluid mx-auto"
                  src={info.img}
                  alt={info.title}
                />
              </div>
              <div className="col-sm-5">
                <h1 className="subtitle text-center mb-5">{info.title}</h1>
                <p>{info.description}</p>
              </div>
            </div>
          </div>
        </div>
        <Ordening />
        <div className="pt-5 pb-3">
          <div className="container">
            <h1 className="subtitle text-center mb-5">Nuestra carta</h1>
            <div className="row justify-content-center">
              <Category categories={nuestraCarta} />
            </div>
          </div>
        </div>
        <div className="pt-5 pb-3">
          <div className="container">
            <h1 className="subtitle text-center mb-5">Siguenos</h1>
            <div className="row justify-content-center">
              <SocialPosts posts={socialposts} />
            </div>
          </div>
        </div>
        <div className="pt-5 pb-3">
          <div className="container">
            <h1 className="subtitle mb-5 text-center">Sucursales</h1>
            <div className="row justify-content-center">
              <Stores stores={locales} />
            </div>
          </div>
        </div>
        {/* TODO: delete this */}
        <hr />
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/settings">settings</Link>
          </li>
          <li>
            <Link to="/pedidos">pedidos</Link>
          </li>
          <li>
            <Link to="/pedir">pedir</Link>
          </li>
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
          <li>
            <Link to="/track">track</Link>
          </li>
          <li>
            <Link to="/reservar">reservar</Link>
          </li>
          <li>
            <Link to="/despacho">despacho</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default HomePage;
