import React from 'react';
import Banner from '../navigation/Banner';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/NavBar';
import ProductCard from './ProductCard';

function Dashboard() {
  const dark = {
    height: '40px',
    backgroundColor: '#181818',
  }
  const product = {
    height: 'auto'
  }
  return (
    <>
      <Navbar />
      <Banner />

      <div style={dark}></div>
      <div style={product} className='d-flex justify-content-center flex-wrap'>
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>


      <Footer />
    </>
  )
}

export default Dashboard