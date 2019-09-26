import React, { useContext } from 'react';
import { ProductContext, ProductConsumer } from '../context';

const HomePage = () => {
  const data = useContext(ProductContext);
  return (
    <>
      {/* value using .Consumer */}
      <ProductConsumer>
        {value => <h1>Hello from HomePage --{value}</h1>}
      </ProductConsumer>

      {/* got value using hooks above */}
      <p style={{ color: 'blue' }}>{data}</p>
    </>
  );
};

export default HomePage;
