import ProductList from '../product/ProductList';

import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>Products</h1>
      {/* {props.productData.map((data) => (
        <li>
          <h2>{data.name}</h2>
        </li>
      ))} */}
      <ProductList product={props.productData} />
    </div>
  );
}
export default Product;
