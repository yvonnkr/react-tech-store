import React from 'react';
import Hero from './../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';
import Cart from './../components/CartPage';

const CartPage = props => {
  return (
    <>
      <Hero img={cartBcg} />
      <Cart history={props.history} />
    </>
  );
};

export default CartPage;
