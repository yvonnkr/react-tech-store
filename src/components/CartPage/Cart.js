import React from 'react';
import Title from './../Title';
import CartTotals from './CartTotals';
import CartList from './CartList';
import CartColumns from './CartColumns';

const Cart = ({ history }) => {
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
      <CartTotals history={history} />
    </section>
  );
};

export default Cart;
