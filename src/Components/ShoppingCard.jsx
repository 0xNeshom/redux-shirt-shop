import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../Redux/actions';

const ShoppingCard = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = card.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotal(totalAmount);
  }, [card]);

  const handleRemove = (product) => {
    dispatch(removeCard(product.id));
  };

  return (
    <div className='pt-12 px-4 md:px-10 lg:px-20'>
      <h2 className='mb-6 text-3xl font-semibold text-[#7A1CAC] my-10'>Shopping Cart</h2>
      {card.length > 0 ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            {card.map((product) => (
              <div
                key={product.id}
                className='flex items-center bg-white shadow-lg rounded-lg p-5'
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-20 h-20 object-cover rounded-md mr-4'
                />
                <div className='flex-1'>
                  <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
                  <p className='text-gray-500'>${product.price}</p>
                </div>
                <button
                  className='text-[#AD49E1] hover:text-[#7A1CAC] transition-all'
                  onClick={() => handleRemove(product)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className='bg-[#EBD3F8] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
            <div>
              <h5 className='text-lg font-medium text-[#7A1CAC] mb-4'>Order Summary</h5>
              <div className='flex justify-between mb-2'>
                <span>Subtotal ({card.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className='flex justify-between font-semibold text-lg mb-6'>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              type='button'
              className='w-full bg-[#7A1CAC] text-white text-lg py-3 rounded-md hover:bg-[#AD49E1] transition-all'
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className='bg-white shadow-md rounded-lg p-10 text-center'>
          <h3 className='text-xl font-medium text-gray-700'>Your cart is empty.</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
