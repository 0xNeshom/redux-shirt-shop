import React from 'react';
import Rating from './Ratings';
import { useCardContext } from '../Context/Context';

const Filters = () => {
  const {
    rate,
    setRate,
    ascending,
    setAscending,
    descending,
    setDescending,
    inStockOnly,
    setInStockOnly,
    fastDeliveryOnly,
    setFastDeliveryOnly,
  } = useCardContext();

  const clearFilters = () => {
    setRate(0);
    setAscending(false);
    setDescending(false);
    setInStockOnly(false);
    setFastDeliveryOnly(false);
  };

  return (
    <div className='w-[400px] mr-32'>
      <div className='fixed z-50'>
        <div className='bg-black my-3 w-[400px] text-white min-h-screen sticky top-0'>
          <div className='flex flex-col p-3 mx-4 gap-5'>
            <h3 className='my-7 text-xl font-medium'>Filter Product</h3>

            <div>
              <label className='flex items-center'>
                <input 
                  type='checkbox' 
                  checked={ascending} 
                  onChange={() => {
                    setAscending(!ascending);
                    setDescending(false);
                  }} 
                />
                <span className='ml-2'>Ascending</span>
              </label>
            </div>

            <div>
              <label className='flex items-center'>
                <input 
                  type='checkbox' 
                  checked={descending}
                  onChange={() => {
                    setDescending(!descending);
                    setAscending(false);
                  }} 
                />
                <span className='ml-2'>Descending</span>
              </label>
            </div>

            <div>
              <label className='flex items-center'>
                <input 
                  type='checkbox' 
                  checked={inStockOnly}
                  onChange={() => setInStockOnly(!inStockOnly)} 
                />
                <span className='ml-2'>Include Out Of Stock</span>
              </label>
            </div>

            <div>
              <label className='flex items-center'>
                <input 
                  type='checkbox' 
                  checked={fastDeliveryOnly}
                  onChange={() => setFastDeliveryOnly(!fastDeliveryOnly)} 
                />
                <span className='ml-2'>Fast Delivery Only</span>
              </label>
            </div>
          </div>

          <div className='p-3 mx-4'>
            <h4 className='mb-3 text-lg text-[#F7C566]'>Rating</h4>
            <Rating rating={rate} onClick={(rate) => setRate(rate)} />
          </div>

          <div className='w-full flex justify-center'>
            <button
              onClick={clearFilters}
              className='my-7 bg-[#F7C566] text-black rounded-md p-3 justify-center flex w-[250px]'
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
