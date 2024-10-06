export const cardReducer = (state, action) => {
    switch (action.type) {
      case "addTheCard":
        if (state.card.some((item) => item.id === action.payload.id)) {
          return state; 
        }
        return {
          ...state,
          card: [...state.card, action.payload], 
        };
  
      case "removeTheCard":
        return {
          ...state,
          card: state.card.filter((item) => item.id !== action.payload.id), 
        };
  
      default:
        return state;
    }
  };
  