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
          className={`w-36 -z-20 ${theme === 'dark' ? 'invert-0' : 'invert'}`}
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
          <img src={logo} alt='logo' className='w-4' />
          <h1 className='font-cherryBoom text-lg'>Fruit</h1>
        </div>

        <p className='text-[12px] text-titleColor dark:text-gray-100 pt-6'>
          Eat healthy, choose <br /> the best fruits.
        </p>
      </div>

      <div className='flex flex-row items-start md:w-[70%] md:gap-3 gap-2'>
        <div className='w-1/4'>
          <h1 className='text-sm text-titleColor dark:text-white font-semibold '>
            Company
          </h1>

          <div className='flex flex-col items-start pt-2 gap-2'>
            <h5 className='text-[12px]'>FAQs</h5>
            <h5 className='text-[12px]'>About Us</h5>
            <h5 className='text-[12px]'>Contact Us</h5>
          </div>
        </div>

        <div className='w-1/4'>
          <h1 className='text-sm text-titleColor dark:text-white font-semibold '>
            News
          </h1>

          <div className='flex flex-col items-start pt-2 gap-2'>
            <h5 className='text-[12px]'>Features</h5>
            <h5 className='text-[12px]'>Testimony</h5>
            <h5 className='text-[12px]'>Videos</h5>
          </div>
        </div>

        <div className='w-1/4'>
          <h1 className='text-sm text-titleColor dark:text-white font-semibold '>
            Address
          </h1>

          <div className='flex flex-col items-start pt-2 gap-2'>
            <h5 className='text-[11px]'>AV. Hacienda 1234 Lima 4321, Peru</h5>
            <h5 className='text-[11px]'>9AM -11PM</h5>
          </div>
        </div>

        <div className='w-1/4'>
          <h1 className='text-sm text-titleColor dark:text-white font-semibold '>
            Social<span className='md:hidden'>s</span>{' '}
            <span className='md:block hidden'>Media</span>
          </h1>

          <div className='flex flex-row items-center gap-3 pt-2'>
            <BsFacebook
              size={15}
              color={`${theme === 'dark' ? 'white' : 'black'}`}
            />

            <BsInstagram
              size={15}
              color={`${theme === 'dark' ? 'white' : 'black'}`}
            />

            <BsYoutube
              size={15}
              color={`${theme === 'dark' ? 'white' : 'black'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
