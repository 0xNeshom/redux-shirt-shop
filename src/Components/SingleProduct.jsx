import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCardContext } from "../Context/Context";
import Rating from "./Ratings";

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

          <span>Rate: {product.score}</span>

          <div className="flex gap-1">
            {isInCard ? 
              <button
  
                className='bg-red-600 py-2 p-7 rounded-sm text-center text-[#E0E0E0]'
                onClick={() => 
                  dispatch({
                    type: 'removeTheCard',
                    payload: product,
                  })
                }
              >
                Remove
                </button>
             : 
              <button
                className="py-2 px-10 rounded-sm bg-[#009688] text-center text-[#E0E0E0]"
                onClick={() => 
                  dispatch({
                    type: 'addTheCard',
                    payload: product,
                  })
                }
              >
                Add
                </button>
            }
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
