import React, { useEffect, useState } from 'react';
import { useCardContext } from '../Context/Context';
import { ListGroup, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ShoppingCard = () => {
  const {
    state: { card },
    dispatch,
  } = useCardContext();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = card.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotal(totalAmount);
  }, [card]);

  const handleRemove = (product) => {
    dispatch({
      type: 'removeTheCard',
      payload: product,
    });
  };

  return (
    <div className='pt-10 '>
      <h2 className='mb-3'>Your Shopping Cart</h2>
      <ListGroup>
        {card.length > 0 ? 
          card.map((product) => (
            <ListGroup.Item
              key={product.id}
              className='flex align-items-center'
            >
              <Image
                src={product.image}
                alt={product.title}
                rounded
                style={{ width: '60px', height: '60px', marginRight: '10px' }}
              />
              <Row className='w-100 items-center'>
                <Col md={6}>
                  <span>{product.title}</span>
                </Col>
                <Col md={2}>
                  <span>${product.price}</span>
                </Col>
                <Col md={4} className='text-end'>
                  <Link to='/ShoppingCard'>
                    <Button
                      variant='danger'
                      size='sm'
                      onClick={() => handleRemove(product)}
                    >
                      Remove
                    </Button>
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
          ))
         : 
          <ListGroup.Item>
            <span className='text-center'>Your cart is empty.</span>
          </ListGroup.Item>
        }
      </ListGroup>
      {card.length > 0 && (
        <div className="felx">
          <div className='mt-3 flex flex-col items-center '>
            <h5>Subtotal ({card.length} items)</h5>
            <h4>Total: ${total}</h4>
            <Button type='button' className='mt-2'>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
