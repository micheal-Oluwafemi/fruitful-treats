import React from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import { mastercard } from '../assets';

const CardFront = ({ acctNum, setIsFlipped, date, hideIcon }) => {
  return (
    <>
      <div className='p-2 bg-gray-200 text-black rounded-md h-[8.2rem]'>
        <div
          className={`${hideIcon === true ? 'flex justify-end' : 'hidden'} `}
        >
          <img src={mastercard} alt='' className='w-8' />
        </div>

        <div className={`${hideIcon === true ? 'pt-0' : 'pt-8'}`}>
          <FcSimCardChip size={26} />

          <h1 className='text-[11px] font-semibold pt-1.5 tracking-widest font-cardFont'>
            {acctNum}
          </h1>

          <h3 className='pt-2 text-[12px]'>{date}</h3>
        </div>
      </div>
    </>
  );
};

export default CardFront;
