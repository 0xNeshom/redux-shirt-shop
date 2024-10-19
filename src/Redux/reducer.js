

import product from '../Services/ProductData.json';
const initialState = {
    product:product,
  card: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CARD':
      if (state.card.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        card: [...state.card, action.payload],
      };

    case 'REMOVE_THE_CARD':
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cardReducer;
