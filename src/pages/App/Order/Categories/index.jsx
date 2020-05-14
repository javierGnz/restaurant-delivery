import React from "react";
import Product from "../../../../components/Product";
import "./styles.scss";

const Categories = ({ title, products, openModal }) => {
  return (
    <div className="categories__item">
      <h2 className="categories__title">{title}</h2>
      <div className="categories__list" onClick={openModal}>
        {products.map(({ id, title, description, price, img }) => {
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
  );
};

export default Categories;
