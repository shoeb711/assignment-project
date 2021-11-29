// import { Fragment } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewProduct from './components/pages/NewProduct';
import Product from './components/pages/Product';

function App(props) {

  const [products, setProducts] = useState([])
  //   {
  //     name: 'Amazon',
  //     image:
  //       'https://lh3.googleusercontent.com/proxy/1AfA8Q3Kg0bvxZkf1Vy0Q7-GTCm48C2kSFUu-sDLzBmg7Hv53c0errelpPzwdW9pcODF-uidScfPFzu7qw_yDZUePBV_gOBHEvl0c1WK9B_x40-C51apVuVzgCKIOdzkUY0djgeTIgjaHLzGimX-1mloaXNc',
  //     description: 'Amazon',
  //     id: 'p1',
  //   },
  //   {
  //     name: 'Netflix 2',
  //     image:
  //       'https://lh3.googleusercontent.com/proxy/1AfA8Q3Kg0bvxZkf1Vy0Q7-GTCm48C2kSFUu-sDLzBmg7Hv53c0errelpPzwdW9pcODF-uidScfPFzu7qw_yDZUePBV_gOBHEvl0c1WK9B_x40-C51apVuVzgCKIOdzkUY0djgeTIgjaHLzGimX-1mloaXNc',
  //     description: 'secondt description',
  //     id: 'p2',
  //   },
  // ]);

  const addProductHandler = ({enteredName,enteredImage,enteredDescription}) =>{
    console.log('checking');
    setProducts(prevProd => {
      const updatedProduct = [...prevProd];
      updatedProduct.unshift({name : enteredName, image : enteredImage, description : enteredDescription,  id: Math.random().toString()})
      return updatedProduct;
    })
  }




  
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Product productData={products} />} />
        <Route
          path='/new-product'
          exact
          element={<NewProduct onAddProduct={addProductHandler} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
