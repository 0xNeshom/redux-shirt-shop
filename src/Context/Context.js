import React, { createContext, useContext, useReducer } from 'react';
import product from '../Services/ProductData.json'; 
import { cardReducer } from '../Reducer';

const Card = createContext();

const Context = ({ children }) => {
  
  const [state, dispatch] = useReducer(cardReducer, {
    product: product,
    card: [], 
  });

  return (
    <Card.Provider value={{ state, dispatch }}>
      {children}
    </Card.Provider>
  );
};

export default Context;

export const useCardContext = () => {
  return useContext(Card);
};
