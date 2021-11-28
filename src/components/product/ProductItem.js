import React from 'react'

function ProductItem(props) {
    return (
      <li>
        <div>
          <h2>{props.description}</h2>
          {/* {props.productData.map((data) => (
        <li>
          <h2>{data.name}</h2>
        </li>
      ))} */}
        </div>
      </li>
    );
}

export default ProductItem
