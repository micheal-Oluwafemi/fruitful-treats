import React from 'react';
import { branch2, fruitLine3, logo } from '../assets';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer = ({ theme }) => {
  return (
    <section className='pt-32 pb-20 flex md:flex-row flex-col items-start justify-between font-poppins relative text-black dark:text-white md:gap-2 gap-5'>
      <div className='absolute bottom-10 '>
        <img
          src={branch2}
          alt=''
          className={`w-36 -z-20 lg:w-40 ${
            theme === 'dark' ? 'invert-0' : 'invert'
          }`}
        />
      </div>

      <div className='absolute bottom-9 left-[55%] '>
        <img
          src={fruitLine3}
          alt=''
          className={`w-12 ${theme === 'dark' ? 'invert-0' : 'invert'}`}
        />
      </div>

      <div className='md:w-[30%] w-full'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-6 lg:w-7' />
          <h1 className='font-cherryBoom text-3xl lg:text-3xl text-titleColor'>
            Fruits
          </h1>
        </div>

        <p className='text-[15px] text-titleColor dark:text-gray-100 pt-6 lg:text-[16px]'>
          Eat healthy, choose <br /> the best fruits.
        </p>
      </div>

      <div className='flex flex-row items-start md:w-[70%] md:gap-3 gap-2'>
        <div className='w-1/4'>
          <h1 className='text-lg text-titleColor dark:text-white font-semibold lg:text-xl '>
            Company
          </h1>

          <div className='flex flex-col items-start pt-2 gap-2'>
            <h5 className='text-[14px] lg:text-[16px]'>FAQs</h5>
            <h5 className='text-[14px] lg:text-[16px]'>About Us</h5>
            <h5 className='text-[14px] lg:text-[16px]'>Contact Us</h5>
          </div>
        </div>

        <div className='w-1/4'>
          <h1 className='text-lg text-titleColor dark:text-white font-semibold lg:text-xl'>
            News
          </h1>

          <div className='flex flex-col items-start pt-2 gap-2'>
            <h5 className='text-[14px] lg:text-[16px]'>Features</h5>
            <h5 className='text-[14px] lg:text-[16px]'>Testimony</h5>
            <h5 className='text-[14px] lg:text-[16px]'>Videos</h5>
          </div>
        </div>

        <div className='w-1/4'>
          <h1 className='text-lg text-titleColor dark:text-white font-semibold lg:text-xl'>
            Address
          </h1>

          <div className='flex flex-col items-start pt-2 gap-2'>
            <h5 className='text-[14px] lg:text-[16px]'>
              AV. Hacienda 1234 Lima 4321, Peru
            </h5>
            <h5 className='text-[13px] lg:text-[16px]'>9AM -11PM</h5>
          </div>
        </div>

        <div className='w-1/4'>
          <h1 className='text-lg lg:text-xl text-titleColor dark:text-white font-semibold '>
            Social<span className='md:hidden'>s</span>{' '}
            <span className='md:block hidden'>Media</span>
          </h1>

          <div className='flex md:flex-row flex-col items-center gap-3 pt-2'>
            <BsFacebook
              size={20}
              color={`${theme === 'dark' ? 'white' : 'black'}`}
            />

            <BsInstagram
              size={20}
              color={`${theme === 'dark' ? 'white' : 'black'}`}
            />

            <BsYoutube
              size={20}
              color={`${theme === 'dark' ? 'white' : 'black'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
