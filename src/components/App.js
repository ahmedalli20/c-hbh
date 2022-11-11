import '../assets/App.css';
import Banner from './navigation/Banner';
import Navbar from './navigation/NavBar';
import Checkout from './checkoutComponent/Checkout';
import OrderDetails from './orderComponent/OrderDetails'
import Dashboard from './dashboardComponents/Dashboard';
import DetailedView from './DetailedView'

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <DetailedView/> */}
    </div>
  );
}

export default App;
