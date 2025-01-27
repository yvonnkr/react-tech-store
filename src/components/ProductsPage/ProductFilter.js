import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context/context';

const ProductFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          price,
          min,
          max,
          company,
          shipping,
          handleChange,
          storeProducts
        } = value;

        // select input logic get only unique values
        let companies = new Set();
        companies.add('all');
        for (let product in storeProducts) {
          companies.add(storeProducts[product]['company']);
        }
        companies = [...companies];

        return (
          <div className='row my-5'>
            <div className='col-10 mx-auto'>
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor='search'>search products</label>
                  <input
                    type='text'
                    name='search'
                    id='search'
                    onChange={handleChange}
                    value={search}
                    className='filter-item'
                  />
                </div>
                {/*end of text search */}

                {/* category search */}
                <div>
                  <label htmlFor='company'>company</label>
                  <select
                    name='company'
                    id='company'
                    onChange={handleChange}
                    value={company}
                    className='filter-item'
                  >
                    {companies.map((company, index) => (
                      <option key={index} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>
                {/* end of category search */}

                {/* price range */}
                <div>
                  <label htmlFor='price'>
                    <p className='mb-2'>
                      product price : <span>£ {price}</span>
                    </p>
                  </label>
                  <input
                    type='range'
                    name='price'
                    id='price'
                    min={min}
                    max={max}
                    className='filter-price'
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* end of price range */}

                {/* free shipping */}
                <div>
                  <label htmlFor='shipping' className='mx-2'>
                    free shipping
                  </label>
                  <input
                    type='checkbox'
                    name='shipping'
                    id='shipping'
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
                {/* end of free shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductFilter;

//styled
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
