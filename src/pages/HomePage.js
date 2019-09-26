import React from 'react';
import { ProductConsumer } from '../context';

const HomePage = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          return <h2>Hello from HomePage</h2>;
        }}
      </ProductConsumer>
    </>
  );
};

export default HomePage;
