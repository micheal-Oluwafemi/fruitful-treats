import React from 'react';
import { enjoyData } from '../constants';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const Enjoy = () => {
  return (
    <section className='font-poppins py-20'>
      <ScrollAnimation animateIn='animate__animated animate__fadeInDown'>
        <h1 className='text-black dark:text-whiteColor font-cherryBoom text-center text-[3rem] lg:text-5xl'>
          Eat and Enjoy
        </h1>
      </ScrollAnimation>

      <div className='flex md:flex-row flex-col items-center w-[75%] md:w-[85%] justify-center gap-5 pt-5 mx-auto'>
        {enjoyData.map((item) => (
          <ScrollAnimation
            animateIn='animate__animated animate__zoomIn'
            key={item.id}
            className='bg-gray-200 dark:bg-[#44444457] md:w-full w-[12rem] md:h-[12rem] lg:h-[15rem] p-1 h-[12.5rem] flex flex-col justify-center clippy md:rounded-tl-[4px] md:rounded-br-[4px] rounded-md'
          >
            <div className='flex justify-center'>
              <img src={item.img} alt='' className='md:w-1/2 w-[70%]' />
            </div>

            <h2 className='font-cherryBoom text-center md:text-lg text-2xl dark:text-white lg:text-2xl'>
              {item.header}
            </h2>
            <p className='text-center text-textColor text-[15px] font-semibold lg:text-[15px]'>
              {item.category}
            </p>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Enjoy;
