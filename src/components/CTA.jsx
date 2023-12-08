import React from 'react';
import { ctaImg, leaf, logo } from '../assets';

const CTA = () => {
  return (
    <section id='join' className='font-poppins w-full px-10'>
      <div className='relative'>
        <img
          src={ctaImg}
          alt=''
          className='w-full h-60 rounded-3xl blur-sm animate'
        />

        <div className='absolute z-[999] -top-4 left-4'>
          <img src={logo} alt='' className='w-6' />
        </div>
        <div className='absolute z-[999] -bottom-3 right-4'>
          <img src={leaf} alt='' className='w-6' />
        </div>

        <div className='absolute contaiin'>
          <h1 className='text-center text-white font-cherryBoom text-3xl leading-[28px]'>
            Receive the Best Fruits
          </h1>

          <p className='text-[11px] text-center text-gray-100 font-medium py-2'>
            Get up to date with the latest fruit harvests and information from
            us
          </p>

          <div className='bg-white pl-3 pr-1.5 py-1 md:flex items-center rounded-full justify-between w-[90%] hidden'>
            <input
              type='text'
              placeholder='Enter your email'
              className='border-none outline-none text-[10px]'
            />

            <button className='text-[9px] w-24 py-2 rounded-full bg-green-500 text-white'>
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
