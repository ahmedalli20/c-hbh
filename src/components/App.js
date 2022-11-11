import '../assets/App.css';
import { useState } from 'react';
import Banner from './navigation/Banner';
import Navbar from './navigation/NavBar';
import Checkout from './checkoutComponent/Checkout';
import OrderDetails from './orderComponent/OrderDetails'
import Dashboard from './dashboardComponents/Dashboard';
import DetailedView from './DetailedView'
import { Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';

function App() {
  const [order, setOrder] = useState([])

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard order={order} setOrder={setOrder} />} />
          <Route path="/orderdetails" element={<OrderDetails order={order} setOrder={setOrder} />} />

        </Routes>
      </>
    </div>
  );
}

export default App;
