import React from 'react'
import Product from '../../../../components/Product';
import "./styles.scss";

const Products = ({ title, products, openModal }) => {
  return (
    <div className="products">
      <h2 className="products__title">{title}</h2>
      <div className="products__list" onClick={openModal}>
        {products.map(({ id, title, description, price, img }) => {
          return(
            <Product key={id} title={title} description={description} price={price} img={img} />
          )
        })}
      </div>
    </div>
  )
}

export default Products
