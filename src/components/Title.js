import React from 'react';
import styled from 'styled-components';

const Title = ({ title, center }) => {
  return (
    <TitleWrapper className='row' center={center}>
      <div className='col'>
        <h2 className='text-title'>{title}</h2>
        <div className='text-underline'></div>
      </div>
    </TitleWrapper>
  );
};

export default Title;

//styled
const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? 'center' : 'left')};
  .text-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props => (props.center ? '0 auto' : '0')};
  }
`;
