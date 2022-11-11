import '../assets/App.css';
import Banner from './navigation/Banner';
import Navbar from './navigation/NavBar';
import Checkout from './checkoutComponent/Checkout';
import OrderDetails from './orderComponent/OrderDetails'
import Dashboard from './dashboardComponents/Dashboard';
import LoginForm from './LoginForm'

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
