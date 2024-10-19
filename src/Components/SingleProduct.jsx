import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard } from "../Redux/actions";

const SingleProduct = ({ product }) => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const isInCard = card.some((p) => p.id === product.id);

  return (
    <div className="mr-3 mb-3 bg-[#F5EFFF] rounded-lg shadow-sm text-black flex flex-col">
      <div className="flex flex-col bg-[#F5EFFF] rounded-lg h-full">
        <img
          className="rounded-b-[25%] transform hover:scale-105 transition-transform duration-300 shadow-[0_5px_10px_rgba(0,0,0,0.22)] h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col p-4 text-black">
          <div className="flex justify-between text-black">
            <h2 className="text-base font-bold truncate">{product.title}</h2>
            <h3 className="text-lg font-bold">
              <span>${product.price}</span>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="text-base font-semibold flex justify-center items-center">
              {product.fastDelivery ? "Fast Delivery" : "4 days delivery"}
            </div>
            <div className="text-base font-semibold">Rate: {product.score}</div>
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            {isInCard ? (
              <button
                className="bg-red-600 py-2 px-6 rounded-md text-white hover:translate-y-1 duration-300"
                onClick={() => dispatch(removeCard(product.id))}
                disabled={!product.inStock}
              >
                Remove
              </button>
            ) : (
              <button
                className={`py-2 px-10 rounded-md text-center text-black shadow-lg ${
                  product.inStock
                    ? "bg-white transform hover:top-1 hover:translate-y-1 duration-300 transition-transform"
                    : "cursor-not-allowed bg-gray-300"
                }`}
                onClick={() => dispatch(addCard(product))}
                disabled={!product.inStock}
              >
                {product.inStock ? "Add" : "Out of Stock"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
