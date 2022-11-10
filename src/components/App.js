import '../assets/App.css';
import Banner from './Banner';
import Navbar from './navigation/NavBar';
import NavbarLinks from './navigation/NavbarLinks';

function App() {
  return (
    <div className="App">
     <Navbar />
     <NavbarLinks />
     <Banner />
    </div>
  );
}

export default App;
