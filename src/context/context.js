import React, { Component } from 'react';
import { items } from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: items
  };
  render() {
    return (
      <ProductContext.Provider value='hello from productContext'>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductContext, ProductConsumer };
