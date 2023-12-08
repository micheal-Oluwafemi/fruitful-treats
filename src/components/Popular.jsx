import React from 'react';
import { popularData } from '../constants';
import { BsPlus } from 'react-icons/bs';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { useDispatch } from 'react-redux';
import { AddCart } from '../redux/CartSlice';

const Popular = () => {
  const dispatch = useDispatch();

  return (
    <section id='popular' className='font-poppins py-20'>
      <ScrollAnimation animateIn='animate__animated animate__fadeInDown'>
        <h1 className='text-black dark:text-whiteColor font-cherryBoom text-center text-[2rem]'>
          Popular Fruits
        </h1>
      </ScrollAnimation>

      <div className='grid-list items-center w-[100%] md:w-[85%] justify-center gap-5 pt-5 mx-auto '>
        {popularData.map((item) => (
          <div
            key={item.id}
            className='p-3 flex flex-col justify-center   relative rounded-b-md pb-10'
          >
            <ScrollAnimation animateIn='animate__animated animate__zoomIn'>
              <div className='absolute bg-gray-200 dark:bg-[#44444457] md:w-full w-[100%] md:h-[100%] h-[100%] z-20 rounded-b-md clippy clipy contain'></div>

              <div className='z-40 relative'>
                <div className='flex justify-center '>
                  <img src={item.img} alt='' className='md:w-[70%] w-[60%]' />
                </div>

                <h2 className='font-cherryBoom text-center md:text-lg text-base dark:text-white'>
                  {item.header}
                </h2>
                <p className='text-center text-textColor text-[10px] font-semibold'>
                  {item.category}
                </p>

                <h3 className='text-center text-[12px] pt-1 font-bold text-black dark:text-white'>
                  ${item.price}
                </h3>

                <div
                  onClick={() => dispatch(AddCart(item))}
                  className='absolute md:bottom-0 bottom-0 right-3.5 md:top-[9.3rem] md:right-3 bg-green-500 z-50 w-4 h-4 rounded-full flex justify-center items-center cursor-pointer '
                >
                  <BsPlus size={15} color='white' />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
