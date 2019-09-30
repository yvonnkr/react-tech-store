import React from 'react';
import Title from './../Title';
import CartTotals from './CartTotals';
import CartList from './CartList';
import CartColumns from './CartColumns';

const Cart = () => {
  return (
    <section className='py-5'>
      {/* title */}
      <div className='container'>
        <Title title='your cart items' center='true' />
      </div>

      {/* cart columns */}
      <CartColumns />

      {/* cart list */}
      <CartList />

      {/* cart totals */}
      <CartTotals />
    </section>
  );
};

export default Cart;
