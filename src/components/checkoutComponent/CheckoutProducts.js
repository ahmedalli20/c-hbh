import React, { useContext } from 'react'
import Product from './Product';
import { CartContext } from '../dashboardComponents/CartContext'

function CheckoutProducts() {
  const { cart, setCart } = useContext(CartContext);
  const styles = {
    width: '50%',
    height: 'auto',
    backgroundColor: '#956801',
    color: '#f2f2f2',
    borderRadius: '10px'
  }
  let priceList = [];
  cart.map(item => priceList.push(item.price))
  const total = priceList.reduce((prev, current) => current + prev)
  return (
    <div className='container p-3 m-3' style={styles}>
      <h6>Cart</h6>
      {
        cart.map(item => {
          return <Product drinkName={item.name} price={item.price} />
        })
      }
      <div className='container-fluid d-flex justify-content-between align-items-center flex-wrap m-2'
        style={{ width: '100%', backgroundColor: '#F5AF0B', color: '#181818', height: 'auto', borderRadius: '5px' }}>
        <h6>Total payable</h6>
        <p>Ksh. {total}</p>
      </div>
    </div>
  )
}

export default CheckoutProducts