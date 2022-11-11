import '../assets/App.css';
import Banner from './navigation/Banner';
import Navbar from './navigation/NavBar';
import Checkout from './checkoutComponent/Checkout';
import OrderDetails from './orderComponent/OrderDetails'
import Dashboard from './dashboardComponents/Dashboard';
import LoginForm from './LoginForm'
import Home from './Home';
import LandingPage from './Landing_page';
import LoginForm from './LoginForm';
import Checkout from './checkoutComponent/Checkout';
import SignupForm from './SignupForm';
import DetailedView from './DetailedView';

function App() {
  return (
    <div className="App">
      <LoginForm />
     {/* <LoginForm /> */}
     {/* <LandingPage/> */}
     {/* <Home/> */}
     <DetailedView />
     {/* <SignupForm /> */}
    </div>
  );
}

export default App;
