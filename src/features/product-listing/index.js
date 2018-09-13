import React from "react";
import '../../index'
import { connect } from 'react-redux'
import { cartItemsWithQuantities } from '../cart';

import ProductListItem from "./product-list-item";

function ProductListing(props) {
  return (
    <div className='product-listing'>
      {props.products.map(product => (
        <ProductListItem
          cart={cartItemsWithQuantities(props.cart)}
          addToCart={props.addToCart}
          product={product} />
      ))}
    </div>
  );
}



function mapStateToProps(state) {
  return {
    cat: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)