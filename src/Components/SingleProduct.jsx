import React from "react";
import { Card } from "react-bootstrap";
import { useCardContext } from "../Context/Context";


const SingleProduct = ({ product }) => {
  const {
    state: { card },
    dispatch,
  } = useCardContext();
  

  const isInCard = card.some((p) => p.id === product.id);

  return (
    <div className="">
      <Card className="flex flex-col" >
        <Card.Img variant="top" src={product.image} alt={product.title} style={{height:'300px'}} />
        <Card.Body className='flex flex-col gap-2'>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle>
            <span>${product.price}</span>
          </Card.Subtitle>
          <span>{product.fastDelivery?"Fast Delivery":"4 days delivery" }</span>
          <span>Rate: {product.score}</span>

          <div className="flex gap-1">
            {isInCard ? 
              <button
  
                className='bg-red-600 py-2 p-6 rounded-md text-center text-[#E0E0E0]'
                onClick={() => 
                  dispatch({
                    type: 'removeTheCard',
                    payload: product,
                  })
                }
                disabled={!product.inStock}  
              >
                Remove
                </button>
             : 
              <button
             className= {`py-2 px-10 rounded-md text-center text-black 
                ${product.inStock ? "bg-[#F7C566]" : "bg-gray-500 cursor-not-allowed py-2 px-3"}`}
                onClick={() => 
                  dispatch({
                    type: 'addTheCard',
                    payload: product,
                  })
                }
                disabled={!product.inStock}  
            
              >
                  {product.inStock?"Add" : "out of stock"}
                </button>
            }
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
