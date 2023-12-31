import React from 'react';
import { fruitLine2, halfbranch, showcaseImg } from '../assets';
import 'animate.css';

const Showcase = ({ theme }) => {
  return (
    <section
      className='flex md:flex-row md:gap-0
     gap-3 flex-col items-center pt-20 font-poppins relative'
    >
      <div className='md:w-1/2 w-full'>
        <div className='flex flex-row relative '>
          <div className='animate__animated animate__zoomIn'>
            <h1 className='text-[3.4rem] leading-[55px] lg:text-6xl font-cherryBoom text-titleColor dark:text-whiteColor md:text-start text-center'>
              Enjoy The Best Fresh Fruits
            </h1>
          </div>

          <div className='absolute bottom-0 md:left-[50%] '>
            <img
              src={fruitLine2}
              alt=''
              className={`w-10 text-black ${theme === 'dark' ? '' : 'invert'}`}
            />
          </div>
        </div>

        <div className=' flex justify-center'>
          <h4 className='text-[16px] lg:text-[16px] pt-3 text-textColor text-center md:text-start w-[80%] md:w-full font-medium animate__animated animate__fadeInUp'>
            Enjoy the best organic fruits harvested with the best possible
            quality, obtaining unique and delicious flavours.
          </h4>
        </div>

        <div className='flex justify-center md:justify-start animate__animated animate__fadeInDown'>
          <a
            href='#popular'
            className='font-medium text-[15px] lg:text-[14px] bg-greenColor text-white py-2 px-3 lg:px-4 lg:py-2.5 mt-2 rounded-full'
          >
            Order Fruit Now
          </a>
        </div>
      </div>
      <div className='w-[80%] md:w-1/2 animate__animated animate__zoomIn  z-50'>
        <img src={showcaseImg} alt='' className='' />
      </div>

      <div className='absolute z-10 bottom-20 right-0 md:top-2'>
        <img
          src={halfbranch}
          alt=''
          className={`md:w-32 w-24 text-black  ${
            theme === 'dark' ? '' : 'invert'
          }`}
        />
      </div>
    </section>
  );
};

export default Showcase;
