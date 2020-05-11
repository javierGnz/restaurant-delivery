import React from 'react'
import Product from '../../../../components/Product';
import "./styles.scss";

const data = [
  {id: 1, name: 'title'},
  {id: 2, name: 'another title'}
]

const Products = ({ title, openModal }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="list" onClick={openModal}>
        {data.map(({id, name}) => {
          return(
            <Product key={id} />
          )
        })}
      </div>
    </div>
  )
}

export default Products
