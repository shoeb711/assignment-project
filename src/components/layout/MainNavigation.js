import React from 'react'
import classes from './MainNavigation.module.css'
import {Link} from 'react-router-dom';




function MainNav() {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>Products</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Products</Link>
            </li>
            <li>
              <Link to='/new-product'>Add New Product</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNav
