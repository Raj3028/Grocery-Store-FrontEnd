import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import GetFruits from './components/getFruits';
import ErrorPage from './components/error';
import BuyFruits from './components/buyFruits'
import MyOrders from './components/getAllOrder'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className='logo'><h2>SHOPPING CENTER</h2></div>
        <div className='route'>
          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='getFruits' element={<GetFruits />} />

            <Route path='buyFruits' element={<BuyFruits />} />
            
            <Route path='myOrders' element={<MyOrders />} />

            <Route path='*' element={<ErrorPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
