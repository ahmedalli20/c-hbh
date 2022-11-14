import React, {useState, useEffect} from 'react';
import Categories from '../categoryComponents/Categories';
import Banner from '../navigation/Banner';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/NavBar';
import ProductCard from './ProductCard';

function Dashboard({order, setOrder, products, setProducts}) {
  
  const [cart, setCart] = useState(0);
  const dark = {
    height: '40px',
    backgroundColor: '#181818',
  }
  const product = {
    height: 'auto'
  }

  useEffect(() => {
    fetch('http://localhost:9297/products', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      console.log(data)
    })
  }, []) 

  return (
    <>
      <Navbar cart={cart} />
      <Banner />

      <div style={dark}></div>
      <div style={product} className='d-flex justify-content-center flex-wrap'>
        {/* <Categories /> */}
        {
          products.map(product => {
            return <ProductCard key={product.id} props={product} setCart={setCart} cart={cart}
            order={order}
            setOrder={setOrder}
            />
          })
          
        }

      </div>


      <Footer />
    </>
  )
}

export default Dashboard