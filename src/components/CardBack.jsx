import React from 'react';

const CardBack = ({ setIsFlipped, cvv }) => {
  return (
    <>
      <div className='bg-gray-200 text-white rounded-md h-[11rem]'>
        <div className='pt-3'>
          <div className='bg-black mt-2.5 w-full h-4'></div>

          <div className='px-2 mt-3'>
            <div className='bg-white w-full h-6 flex justify-end items-center px-2 '>
              <h2 className='text-[10px] text-black font-semibold'>{cvv}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBack;
