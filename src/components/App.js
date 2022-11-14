import '../assets/App.css';
import { useEffect, useState } from 'react';
import Banner from './navigation/Banner';
import Navbar from './navigation/NavBar';
import Checkout from './checkoutComponent/Checkout';
import OrderDetails from './orderComponent/OrderDetails'
import Dashboard from './dashboardComponents/Dashboard';
import DetailedView from './DetailedView'
import { Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'
import { CartContext } from './dashboardComponents/CartContext';

function App() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm/>} />
          <CartContext.Provider>
          <Route path="/dashboard" element={<Dashboard order={order} setOrder={setOrder} products={products} setProducts={setProducts} />} />
          <Route path="/details/:id" element={<DetailedView products={products} />} />
          <Route path="/orderdetails" element={<OrderDetails order={order} setOrder={setOrder} />} />
          <Route path="/checkout" element={<Checkout/>} />
          </CartContext.Provider>


        </Routes>
      </>
    </div>
  );
}

export default App;
