import { createStore } from 'redux';
import cardReducer from './reducer';

const store = createStore(cardReducer);

export default store;
