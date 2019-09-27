import React from 'react';
import Title from '../Title';

const Contact = () => {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='contact us' />
          <form
            className='mt-5'
            action='https://formspree.io/yvonnkr86@gmail.com'
            method='POST'
          >
            {/* first */}
            <div className='form-group'>
              <input
                type='text'
                name='firstName'
                className='form-control'
                placeholder='Your Name'
              />
            </div>

            {/* email */}
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='email@email.com'
              />
            </div>

            {/* subject */}
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='Subject'
              />
            </div>

            {/* message */}
            <div className='form'>
              <textarea
                name='message'
                className='form-control'
                rows='10'
                placeholder='Message...'
              />
            </div>

            {/* submit */}
            <div className='form-group mt-3'>
              <input
                type='submit'
                className='form-control bg-primary text-white'
                value='send'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
