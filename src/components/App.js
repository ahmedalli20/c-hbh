import '../assets/App.css';
import Home from './Home';
import LandingPage from './Landing_page';
import LoginForm from './LoginForm';
import Checkout from './checkoutComponent/Checkout';
import SignupForm from './SignupForm';
import DetailedView from './DetailedView';

function App() {
  return (
    <div className="App">
     {/* <LoginForm /> */}
     {/* <LandingPage/> */}
     {/* <Home/> */}
     <DetailedView />
     {/* <SignupForm /> */}
    </div>
  );
}

export default App;
