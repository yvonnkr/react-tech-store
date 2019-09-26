import React from 'react';

const SingleProductPage = props => {
  return (
    <>
      <h1>Hello from SingleProductPage id: {props.match.params.id}</h1>
    </>
  );
};

export default SingleProductPage;
