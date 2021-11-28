import React from 'react'

function ProductList(props) {
    return (
        <ul>
          {props.product.map((data) => (
            <productItem 
                key = {data.id}
                id = {data.id}
                name = {data.name}
                image = {data.image}
                description = {data.description}
            />
          ))}
          {props.name}
        </ul>
    );
}

export default ProductList
