import React from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import { mastercard } from '../assets';

const CardFront = ({ acctNum, setIsFlipped, date, hideIcon }) => {
  return (
    <>
      <div className='p-2 bg-gray-200 text-black rounded-md h-[11rem]'>
        <div
          className={`${hideIcon === true ? 'flex justify-end' : 'hidden'} `}
        >
          <img src={mastercard} alt='' className='w-11' />
        </div>

        <div className={`${hideIcon === true ? 'pt-0' : 'pt-10'}`}>
          <FcSimCardChip size={39} />

          <h1
            className={`text-[16px] lg:text-[16px] font-semibold pt-4 tracking-widest font-cardFont`}
          >
            {acctNum}
          </h1>

          <h3 className='pt-4 text-[14px] lg:text-[15px]'>{date}</h3>
        </div>
      </div>
    </>
  );
};

export default CardFront;
