import '../assets/App.css';
import Banner from './navigation/Banner';
import Navbar from './navigation/NavBar';
import Checkout from './checkoutComponent/Checkout';
import OrderDetails from './orderComponent/OrderDetails'
import Dashboard from './dashboardComponents/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
