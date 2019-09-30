import React from 'react';
import Title from './../Title';
import CartTotals from './CartTotals';
import CartList from './CartList';
import CartColumns from './CartColumns';

const Cart = () => {
  return (
    <div>
      <Title title='cart items' center='true' />
      <CartColumns />
      <CartList />
      <CartTotals />
    </div>
  );
};

export default Cart;
