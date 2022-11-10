import React from 'react';
import SingleOrder from './SingleOrder';
import image from '../../assets/images/budweiser_small.png';
import Total from './Total';

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
    )
}

export default OrderDetails