import Header from './Components/Header';
import Home from './Components/Home';
import store from './Redux/store';
import { Routes, Route, Navigate } from 'react-router-dom';

import ShoppingCard from './Components/ShoppingCard';
import { Provider } from "react-redux";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ShoppingCard' element={<ShoppingCard />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Provider>
  );
}

export default App;
