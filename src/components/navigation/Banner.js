import React from 'react'
import NavbarLinks from './NavbarLinks'
import bannerImg from '../../assets/images/Rectangle 36.jpg'

function Banner() {
  const banner = {
    height: "250px",
    backgroundImage: `url('${bannerImg}')`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'

  }
  return (
    <div style={banner} className=''>
      <NavbarLinks />
      <div className='container d-flex justify-content-center align-items-center'>
        <h2 className='text-center mt-5 text-light'>Drink better, not more...</h2>
      </div>
    </div>
  )
}

export default Banner