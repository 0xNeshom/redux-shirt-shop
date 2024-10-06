import Header from './Components/Header';
import Home from './Components/Home';

import { Routes, Route, Navigate } from 'react-router-dom';
import Context from './Context/Context';
import ShoppingCard from './Components/ShoppingCard';

function App() {
  return (
    <Context>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ShoppingCard' element={<ShoppingCard />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Context>
  );
}

export default App;
