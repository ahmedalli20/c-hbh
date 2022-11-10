import React from 'react';
import SingleOrder from './SingleOrder';
import image from '../../assets/images/budweiser_small.png';

function OrderDetails() {
    const styles={
        backgroundColor: "white", 
        height: '80vh',
        borderRadius: 10,
    }
    const beer = "Budweiser Root Beer";
    const price = 203.50;
    const pieces = 4091;
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

            </div>
        </div>
    )
}

export default OrderDetails