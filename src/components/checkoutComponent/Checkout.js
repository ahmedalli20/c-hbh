import React from 'react'
import CheckoutForm from './CheckoutForm';
import CheckoutProducts from './CheckoutProducts';

function Checkout() {
    const styles = {
        backgroundColor: "white",
        height: 'auto',
        borderRadius: 10,
    }
    return (
        <div className='container' style={styles}>
            <h5 className='text-start p-3'>
                Checkout
            </h5>

            {/* <h6 className='text-start'>Billing Address</h6> */}
            <div className='container d-flex justify-content-evenly align-items-center flex-column'>
                {/* <CheckoutForm /> */}
                <CheckoutProducts />
            </div>
        </div>
    )
}

export default Checkout