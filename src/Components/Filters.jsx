import React, { useState } from 'react';
import Rating from './Ratings';

const Filters = () => {
  const [rate, setRate] = useState(3);
  const [category,setCategory] = useState();

  return (
    <div className="w-[400px] mr-32">
      <div className='fixed z-50'>
        <div className='bg-[#1E1E1E] my-3 w-[400px] text-[#E0E0E0] min-h-screen  sticky  top-0'>
          <div className='flex flex-col p-3 mx-4 gap-5'>
            <h3 className='my-7 text-xl font-medium'>Filter Product</h3>

            <div>
              <label className='flex items-center'>
                <input type='checkbox' className='' />
                <span className='ml-2'>Ascending</span>
              </label>
            </div>

            <div>
              <label className='flex items-center'>
                <input type='checkbox' className='' />
                <span className='ml-2'>Descending</span>
              </label>
            </div>

            <div>
              <label className='flex items-center'>
                <input type='checkbox' className='rounded-full' />
                <span className='ml-2'>Include Out Of Stock</span>
              </label>
            </div>

            <div>
              <label className='flex items-center'>
                <input type='checkbox' className='' />
                <span className='ml-2'>Fast Delivery Only</span>
              </label>
            </div>
          </div>

          <div className='p-3 mx-4'>
            <h4 className='mb-3 text-lg'>Rating</h4>
            <Rating rating={rate} onClick={(rate) => setRate(rate)} />
          </div>

          <div className='w-full flex justify-center'>
            <button
              onClick={() => setRate(0)}
              className='my-7 bg-[#009688] rounded-md p-3 justify-center flex w-[250px]'
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
