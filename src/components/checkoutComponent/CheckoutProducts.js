import React from 'react'
import Product from './Product';

function CheckoutProducts() {
  const styles = {
    width: '50%',
    height: 'auto',
    backgroundColor: '#956801',
    color: '#f2f2f2',
    borderRadius: '10px'
  }
  // to be replaced with real data
  const total = 70000.50;
  // to be replaced with real data
  return (
    <div className='container p-3 m-3' style={styles}>
      <h6>Products</h6>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <div className='container-fluid d-flex justify-content-between align-items-center flex-wrap m-2'
        style={{ width: '100%', backgroundColor: '#F5AF0B', color: '#181818', height: 'auto', borderRadius: '5px' }}>
        <h6>Total payable</h6>
        <p>Ksh. {total}</p>
      </div>
    </div>
  )
}

export default CheckoutProducts