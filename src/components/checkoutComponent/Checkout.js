import React from 'react'
import Footer from '../navigation/Footer';
import Navbar from '../navigation/NavBar';
import NavbarLinks from '../navigation/NavbarLinks';
import CheckoutForm from './CheckoutForm';
import CheckoutProducts from './CheckoutProducts';

function Checkout() {
    const styles = {
        backgroundColor: "white",
        height: 'auto',
        borderRadius: 10,
    }
    return (
        <>
        <Navbar />
        <NavbarLinks />
        <div className='container py-5 my-1' style={styles}>
            <h5 className='text-start p-3'>
                Checkout
            </h5>

            {/* <h6 className='text-start'>Billing Address</h6> */}
            <div className='container d-flex justify-content-evenly align-items-center flex-row flex-wrap'>
                <CheckoutForm />
                <CheckoutProducts />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Checkout