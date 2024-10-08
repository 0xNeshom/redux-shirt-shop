import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCardContext } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const {
    state: { card },
    dispatch,
  } = useCardContext();
  
 
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); 
  };

  return (
    <div className='fixed z-50 w-full mb-20'>
      <div className='bg-black h-20'>
        <div className='flex items-center justify-between h-full container mx-auto px-4'>
          <div className='flex gap-14'>
            <Link to='/' className='no-underline text-white hover:text-teal-600'>
              Home
            </Link>
            <Link to='/template' className='no-underline text-white hover:text-teal-600'>
              Template
            </Link>
            <Link to='/docs' className='no-underline text-white hover:text-teal-600'>
              Docs
            </Link>
            <Link to='/sale' className='no-underline text-white hover:text-teal-600'>
              Sale
            </Link>
          </div>

          <div className='relative bg-[#F7C566] h-full w-40'>
            <button
              className='flex items-center h-full w-full justify-center rounded-md p-2'
              onClick={toggleDropdown} 
            >
              <FaShoppingCart fontSize='40px' className='text-white' />
              <span className='ml-2 text-white text-sm'>{card.length}</span>
            </button>

            
            {isDropdownOpen && (
              <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-10 overflow-y-auto h-[400px]'>
                {card.length > 0 ? (
                  <>
                    {card.map((product) => (
                      <div
                        className='flex items-center justify-between p-2 hover:bg-gray-100 transition-all rounded-md'
                        key={product.id}
                      >
                        <img
                          src={product.image}
                          className='w-12 h-12 object-cover rounded-lg'
                          alt={product.name}
                        />
                        <div className='ml-4 flex flex-col'>
                          <span className='font-semibold text-sm'>{product.name}</span>
                          <span className='text-gray-600 text-xs'>$ {product.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize='20px'
                          className='cursor-pointer text-red-500 hover:text-red-700 transition-colors'
                          onClick={() =>
                            dispatch({
                              type: 'removeTheCard',
                              payload: product,
                            })
                          }
                        />
                      </div>
                    ))}
                    <Link to='/ShoppingCard'>
                      <button className='bg-blue-600 text-white w-full py-2 rounded-lg mt-2 hover:bg-blue-700 transition-all'>
                        Go To Cart
                      </button>
                    </Link>
                  </>
                ) : (
                  <span className='text-center py-2 text-gray-600'>
                    Cart is Empty!
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
