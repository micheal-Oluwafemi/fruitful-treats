import React from 'react';
import { aboutImage, branchFlipped, fruitLine1 } from '../assets';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const About = ({ theme }) => {
  return (
    <section
      id='about'
      className='flex md:flex-row md:gap-7
     gap-3 flex-col items-center mt-5 font-poppins'
    >
      <div className='w-[70%] md:w-1/2 relative '>
        <ScrollAnimation animateIn='animate__animated animate__fadeInLeft'>
          <img src={aboutImage} alt='' />
        </ScrollAnimation>

        <div className='absolute top-32 -left-32'>
          <img
            src={branchFlipped}
            alt=''
            className={`w-[30%] ${theme === 'dark' ? 'invert-0' : 'invert'}`}
          />
        </div>
      </div>

      <div className='md:w-1/2 w-full'>
        <div className='flex flex-row relative '>
          <ScrollAnimation animateIn='animate__animated animate__fadeInUp'>
            <h1 className='text-[3rem] leading-10 font-cherryBoom text-titleColor dark:text-whiteColor md:text-start text-center lg:text-6xl'>
              We Provide Healthy Fruits
            </h1>
          </ScrollAnimation>
        </div>

        <div className=' flex justify-center relative'>
          <ScrollAnimation
            animateIn='animate__animated animate__zoomIn'
            className='flex justify-center md:justify-start'
          >
            <h4 className='text-[16px] pt-4 text-textColor text-center md:text-start w-[80%] md:w-full font-medium lg:text-[16px]'>
              The Fruit comes to us from the best harvests, planted with the
              care required to obtain the best quality fruit, enjoying its
              flavours and taking care of your health.
            </h4>
          </ScrollAnimation>

          <div className='absolute md:-bottom-5 -bottom-12 md:right-32 '>
            <img
              src={fruitLine1}
              alt=''
              className={`w-10 text-black drop-shadow-md brightness-200 ${
                theme === 'dark' ? 'invert-0' : 'invert'
              }`}
            />
          </div>
        </div>

        <ScrollAnimation animateIn='animate__animated animate__bounceIn'>
          <div className='flex justify-center md:justify-start md:mt-4 mt-7'>
            <button className='font-medium text-[16px] bg-greenColor text-white py-2 px-5 mt-2 rounded-full lg:text-[15px] lg:px-5 lg:py-2.5'>
              Know More
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
