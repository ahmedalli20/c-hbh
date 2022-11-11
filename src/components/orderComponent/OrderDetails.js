import React from 'react';
import SingleOrder from './SingleOrder';
import Total from './Total';
import NavbarLinks from '../navigation/NavbarLinks';
import Navbar from '../navigation/NavBar';
import Footer from '../navigation/Footer';

import image from '../../assets/images/budweiser_small.png';


function OrderDetails() {
    const styles={
        backgroundColor: "white", 
        height: '80vh',
        borderRadius: 10,
    }
    // to be replaced with concrete data
    const beer = "Budweiser Root Beer";
    const price = 203.50;
    const pieces = 4091;
    const total = 5533.3;
    // to be replaced with concrete data
    return (
        <>
        <Navbar />
        <NavbarLinks />
        <div className='container' style={styles}>
            <h5 className='text-start p-3'>
                Order Details
            </h5>

            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <SingleOrder image={image} beer={beer} price={price} pieces={pieces}/>
                <SingleOrder image={image} beer={beer} price={price} pieces={pieces}/>
                <SingleOrder image={image} beer={beer} price={price} pieces={pieces}/>
                <SingleOrder image={image} beer={beer} price={price} pieces={pieces}/>
                <SingleOrder image={image} beer={beer} price={price} pieces={pieces}/>
                <SingleOrder image={image} beer={beer} price={price} pieces={pieces}/>

                <Total total={total} />

                <button className='m-3' style={{width: '300px', height: '50px', border: 0, borderRadius: '5px',color: '#f2f2f2', backgroundColor: 'maroon'}}>Checkout</button>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default OrderDetails