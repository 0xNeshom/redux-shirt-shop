
export const addCard = (item) => ({
  type: 'ADD_TO_CARD',
  payload: item,
});

export const removeCard = (id) => ({
  type: 'REMOVE_THE_CARD',
  payload: { id },
});
