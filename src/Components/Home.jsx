import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
import Filters from './Filters';
// import { Category } from "./Category";

const Home = () => {
  const { product } = useSelector((state) => ({
    product: state.product,
  }));
  const [inStockOnly, setInStockOnly] = useState(false);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);
  const [ascending,setAscending] = useState(false);
  const [descending,setDescending] = useState(false);
  const [rate,setRate] = useState(1)

  const filteredProduct = product
    .filter((item) => (inStockOnly ? item.inStock : true))
    .filter((item) => (fastDeliveryOnly ? item.fastDelivery : true))
    .filter((item) => item.score >= rate)
    // .filter((item) => (category === "tShirt"))
    // .filter((item) => (category === "poloShirt"))
    .sort((a, b) => {
      if (ascending) return a.price - b.price;
      if (descending) return b.price - a.price;
      return 0;
    });

  return (
    <div className='flex pt-[70px]'>
      <Filters 
      inStockOnly={inStockOnly} 
      setInStockOnly={setInStockOnly}
      fastDeliveryOnly={fastDeliveryOnly}
      setFastDeliveryOnly={setFastDeliveryOnly}
      ascending={ascending}
      descending={descending}
      setAscending={setAscending}
      setDescending={setDescending}
      rate={rate}
      setRate={setRate}
      />
      <div className='flex justify-center w-full '>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <SingleProduct product={item} key={item.id} />
            ))
          ) : (
            <p>No products available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
