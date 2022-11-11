import React from 'react'
import image from '../../assets/images/budweiser_small.png'

function ProductCard() {
  const postCard = {
    borderRadius: '5px',
    height: '400px',
    width: '350px',
    backgroundColor: '#f2f2f2'
  }
  const innerCard = {
    height: '50%',
    width: '100%',
    backgroundColor: '#F5AF0B',
    borderRadius: '30px 30px 5px 5px'
  }
  const checkoutBtn = {
    width: '70%',
    backgroundColor: "#800000",
    border: 'none',
    color: '#f2f2f2',
    padding: '7px',
    borderRadius: '3px',
  }
  return (
    <>
      <div style={postCard} className='d-flex justify-content-between align-items-center flex-column m-2'>
        {/* <h5>ProductCard</h5> */}
        <div className='p-4'>
          <img src={image} alt='beer' height={150} />
        </div>
        <div className='mx-5' style={innerCard}>
          <div className='d-flex justify-content-between px-4 pt-3' style={{ color: '#800000' }}>
            <h5>Soweto Ruins Beer</h5>
            <i class='bx bxs-heart bx-sm'></i>
          </div>
          <div className='d-flex justify-content-between px-4 pt-2' style={{ color: '#800000' }}>
            <h6>786pcs</h6>
            <h6>Ksh. 1799.99</h6>
          </div><div className='d-flex justify-content-between px-4 pt-2' style={{ color: '#800000' }}>
            <p>This is a description of the product</p>

          </div>

          {/* button */}
          <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <button style={checkoutBtn} className='d-flex justify-content-center align-items-center'>
              <span className='px-1'>Checkout</span>
              <i class='bx bxs-cart bx-sm' ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard