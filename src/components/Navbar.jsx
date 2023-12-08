import React, { useEffect, useState } from 'react';
import { HiOutlineMoon, HiX } from 'react-icons/hi';
import { BsFillHandbagFill, BsBrightnessHighFill } from 'react-icons/bs';
import { branchUpsideDown, logo } from '../assets';
import { links } from '../constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const { item } = useSelector((state) => state.cart);
  const [hideMenu, setHideMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <section
        className={`${
          scrolled
            ? 'bg-[rgba(255,255,255,0.44)] dark:bg-bgTransparent  animate__animated animate__fadeInDown'
            : 'bg-containerColor dark:bg-titleColor'
        } w-full flex flow-row items-center justify-between font-poppins dark:text-white py-1 fixed md:px-20 xlg:px-[15rem] px-4 z-[99999999999999938892992924949249472747247]`}
      >
        <div className='flex items-center w-1/3'>
          <img src={logo} alt='' className='w-5 h-5' />

          <Link
            to={'/'}
            onClick={() => {
              window.scrollTo(0, 0);
              setActive('');
            }}
          >
            <h1 className='font-cherryBoom text-[1.3rem] text-black dark:text-white'>
              Fruits
            </h1>
          </Link>
        </div>

        <div className='w-1/3'>
          <div className='md:flex flex-row hidden items-center gap-6'>
            {links.map((item) => (
              <div key={item.id}>
                <a href={`#${item.navLink}`}>
                  <h3
                    onClick={() => setActive(item.navLink)}
                    className={`${
                      active === item.navLink
                        ? 'text-green-500'
                        : 'text-gray-500 dark:text-white'
                    } text-[14px] font-medium cursor-pointer`}
                  >
                    {item.name}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-end items-center gap-3 w-1/3'>
          <Link
            to={'/cart'}
            onClick={() => window.scrollTo(0, 0)}
            className='relative'
          >
            <BsFillHandbagFill size={15} cursor='pointer' />

            <div
              className={`${
                item.length >= 1 ? 'bg-green-500' : ''
              } absolute -top-[2px] -right-[5px] w-[11px] h-[11px] rounded-full flex items-center justify-center`}
            >
              <p
                className={`${
                  item.length >= 1 ? 'block' : 'hidden'
                } text-center text-[8px] font-medium text-white`}
              >
                {item.length}
              </p>
            </div>
          </Link>

          <div onClick={handleThemeSwitch}>
            {theme === 'dark' ? (
              <BsBrightnessHighFill size={22} cursor='pointer' />
            ) : (
              <HiOutlineMoon size={22} cursor='pointer' />
            )}
          </div>

          <div
            onClick={() => setHideMenu(true)}
            className='cursor-pointer md:hidden'
          >
            <HiMenuAlt3 size={22} />
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <section className={`${hideMenu === true ? 'block' : 'hidden'} relative`}>
        <div className='fixed top-0 z-[999999999494949494] dark:text-white bg-white dark:bg-titleColor shadow-md w-full max-h-[500px] flex flex-col items-center justify-center p-10 gap-4'>
          {links.map((item) => (
            <div key={item.id}>
              <a href={`#${item.navLink}`} onClick={() => setHideMenu(false)}>
                <h2
                  onClick={() => setActive(item.navLink)}
                  className={` ${
                    active === item.navLink
                      ? 'text-green-500'
                      : 'text-gray-500 dark:text-white'
                  } text-[14.3px] font-semibold`}
                >
                  {item.name}
                </h2>
              </a>
            </div>
          ))}
        </div>

        <div className='fixed z-[777999999993939399393939393939393939393939] top-0'>
          <img
            src={branchUpsideDown}
            alt=''
            className={` ${theme === 'dark' ? 'invert-0' : 'invert'} w-24`}
          />
        </div>

        <div
          onClick={() => setHideMenu(false)}
          className='fixed right-3 top-2 z-[999999993939399393939393939393939393939] cursor-pointer'
        >
          <HiX size={20} color={`${theme === 'dark' ? 'white' : 'black'}`} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
