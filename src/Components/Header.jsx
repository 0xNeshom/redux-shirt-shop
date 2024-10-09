import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCardContext } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';

export default function Header() {
  const {
    state: { card },
    dispatch,
  } = useCardContext();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      setDropdownOpen(false);
    }
  };

  return (
    <div className='fixed z-50 w-full'>
      <div className='bg-[#2E073F] h-[70px] border-b-4 border-white'>
        <div className='flex items-center justify-between h-full container mx-auto px-4'>
          <div className='flex gap-8 md:gap-14'>
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

          <div className='relative h-full w-40'>
            <div className='flex h-full items-center gap-4'>
              <button className='bg-white'>{/* <Category /> */}</button>
              <button className='flex items-center h-full justify-center rounded-md'>
                <IoNotifications fontSize='25px' className='text-white hover:animate-shake' />
              </button>
              <button
                className='flex items-center h-full justify-center rounded-md hover:-translate-y-1 transition-transform'
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <FaShoppingCart fontSize='25px' className='text-white' />
                <span className='ml-2 text-white font-extrabold text-sm hover:animate-shake'>
                  {card.length}
                </span>
              </button>
            </div>

            {isDropdownOpen && (
              <div
                id='modal-overlay'
                onClick={handleClickOutside}
                className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
              >
                <div className='bg-white shadow-lg p-4 w-[90%] sm:w-[400px] h-[400px] overflow-y-auto rounded-lg relative z-50'>
                  {card.length > 0 ? (
                    <>
                      {card.map((product) => (
                        <div
                          className='flex items-center justify-between p-2 hover:bg-[#6B1F7D] transition-all rounded-md'
                          key={product.id}
                        >
                          <img
                            src={product.image}
                            className='w-16 h-16 object-cover rounded-lg'
                            alt={product.name}
                          />
                          <div className='ml-4 flex flex-col'>
                            <span className='font-semibold text-black text-sm'>
                              {product.name}
                            </span>
                            <span className='text-black text-base'>
                              $ {product.price}
                            </span>
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
                        <button
                          onClick={(e) => setDropdownOpen(!isDropdownOpen)}
                          className='bg-[#4C1C8C] text-white w-full py-2 rounded-lg mt-2 hover:bg-blue-700 transition-all'
                        >
                          Go To Cart
                        </button>
                      </Link>
                    </>
                  ) : (
                    <div className="flex w-full justify-center items-center h-full">
                      <h3 className='text-center text-black'>
                        Cart is empty!
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
