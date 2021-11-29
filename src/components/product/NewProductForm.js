import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewProductForm.module.css';

function NewProductForm(props) {
  const productName = useRef();
  const productImage = useRef();
  const productDescription = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = productName.current.value;
    const enteredImage = productImage.current.value;
    const enteredDescription = productDescription.current.value;

    console.log(enteredName);
    console.log(enteredImage);
    console.log(enteredDescription);


    // const productData = {
    //   name: enteredName,
    //   Image: enteredImage,
    //   description: enteredDescription,
    // };

    props.onAddProduct({enteredName,enteredImage,enteredDescription});
    // props.onAddProduct()
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Product Name</label>
          <input type='text' id='name' required ref={productName} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Product Image URL</label>
          <input type='url' id='image' ref={productImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Product Description</label>
          <textarea
            required
            id='description'
            rows='5'
            ref={productDescription}
          />
        </div>
        <div className={classes.actions}>
          <button>Save</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProductForm;
