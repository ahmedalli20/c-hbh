import '../assets/App.css';
import LoginForm from './LoginForm';
import Checkout from './checkoutComponent/Checkout';
import SignupForm from './SignupForm';
import Home from './Home';
import { RouterProvider, createBrowserRouter } from "react-router-dom"


//routes
const router = createBrowserRouter([
  {path: "/", element: <SignupForm />},
  {path: "/login", element: <LoginForm />},
  {path: "/dashboard", element: <Home />}


  
])



function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
