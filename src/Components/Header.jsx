import React from 'react';

import {
  Dropdown,
  Navbar,
  Container,
  FormControl,
  Nav,
  Badge,
  Button,
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useCardContext } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ShoppingCard from './ShoppingCard';
export default function Header() {
  const {
    state: { card },
    dispatch,
  } = useCardContext();
  return (
    <div className='fixed z-50 w-full mb-20 '>
      <div className='bg-[#1E1E1E] h-20'>
        <Navbar className='flex'>
          <Container className="">
            <Navbar.Brand>
              <a href='/'>Shopping Cart</a>
            </Navbar.Brand>
            <Navbar.Text>
              <FormControl placeholder='Search a product' />
            </Navbar.Text>
            <Nav>
              <Dropdown className='relative'>
                <Dropdown.Toggle
                  variant='success'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <FaShoppingCart fontSize='25px' />
                  <Badge className='ml-2' style={{ fontSize: '12px' }}>
                    {card.length}
                  </Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className='bg-white rounded-lg shadow-lg mt-2 p-4 absolute '
                  style={{ minWidth: 370, left: '-291%' }}
                >
                  {card.length > 0 ? 
                    <>
                      {card.map((product) => (
                        <span
                          className='flex items-center justify-between p-2 hover:bg-gray-100 transition-all rounded-md'
                          key={product.id}
                        >
                          <img
                            src={product.image}
                            className='w-12 h-12 object-cover rounded-lg'
                            alt={product.name}
                          />
                          <div className='ml-4 flex flex-col'>
                            <span className='font-semibold text-sm'>
                              {product.name}
                            </span>
                            <span className='text-gray-600 text-xs'>
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
                        </span>
                      ))}
                      <Link to='/ShoppingCard'>
                        <Button className='bg-blue-600 text-white w-full py-2 rounded-lg mt-2 hover:bg-blue-700 transition-all'>
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                   : 
                    <span className='text-center py-2 text-gray-600'>
                      Cart is Empty!
                    </span>
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
