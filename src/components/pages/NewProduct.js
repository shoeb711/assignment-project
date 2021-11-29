import React from 'react';
import NewProductForm from '../product/NewProductForm';

function NewProduct(props) {
  return (
    <div>
      <h1>New Product</h1>
      <NewProductForm onAddProduct={props.onAddProduct} />
    </div>
  );
}

export default NewProduct;
