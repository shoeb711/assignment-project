// import ProductList from '../product/ProductList';
import classes from './Product.module.css';

import React from 'react';
import Card from '../ui/Card';

function Product(props) {
  return (
    <div>
      <h1>Products</h1>
      <ul className={classes.list}>
        {props.productData.map((data) => (
          <li className={classes.item} key={data.id}>
            <Card>
            <div className={classes.image}>
              <img src={props.image} alt={props.name} />
            </div>
            <div className={classes.content}>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
            </Card>
          </li>
        ))}
      </ul>
      {/* <ProductList product={props.productData} /> */}
    </div>
  );
}
export default Product;
