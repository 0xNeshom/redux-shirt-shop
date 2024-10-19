import React from 'react';
import Rating from './Ratings';

const Filters = ({setInStockOnly,inStockOnly,fastDeliveryOnly,setFastDeliveryOnly,ascending,setAscending,descending,setDescending,rate,setRate}) => {

  const handleClearFilters = () => {
    setAscending(false)
    setInStockOnly(false)
    setDescending(false)
    setRate(false)
    setFastDeliveryOnly(false)
  };

  return (
    <div className='hidden lg:block w-[300px] mr-[70px]'> 
      <div className='fixed z-50'>
        <div className='bg-[#2E073F] w-[300px] text-white min-h-screen sticky top-0'>
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
            <Rating rating={rate} onClick={(rating) => setRate(rating)} />
          </div>

          <div className='w-full flex justify-center'>
            <button
             onClick={handleClearFilters} 
              className='my-7 bg-[#EBD3F8] text-black rounded-md p-3 justify-center flex w-[250px]'
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
