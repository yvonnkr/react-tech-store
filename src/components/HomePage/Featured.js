import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';

const Featured = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        {/* title */}
        <Title title='featured products' center='true' />
        {/* products */}
        <div className='row'>
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return featuredProducts.map(product => (
                <Product key={product.id} product={product}></Product>
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
};

export default Featured;
