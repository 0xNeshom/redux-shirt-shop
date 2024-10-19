import React, { createContext, useContext, useReducer,useState } from 'react';
import product from '../Services/ProductData.json';
import { cardReducer } from '../Reducer';

const Card = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, {
    product: product,
    card: [],
  });
  // const [category, setCategory] = useState('all');
  // const [ascending, setAscending] = useState(false);
  // const [descending, setDescending] = useState(false);
  // const [inStockOnly, setInStockOnly] = useState(false);
  // const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);
  // const [rate, setRate] = useState(1);

  return (
    <Card.Provider
      value={{
        state,
        dispatch,
        // category,
        // setCategory,
        // ascending,
        // setAscending,
        // descending,
        // setDescending,
        // inStockOnly,
        // setInStockOnly,
        // fastDeliveryOnly,
        // setFastDeliveryOnly,
        // rate,
        // setRate
      }}
    >
      {children}
    </Card.Provider>
  );
};

export default Context;

export const useCardContext = () => {
  return useContext(Card);
};
